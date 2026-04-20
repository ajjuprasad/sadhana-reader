const TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const WSS_URL = 'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1';

function generateId(): string {
  return crypto.randomUUID().replace(/-/g, '');
}

function generateSecMsGec(): string {
  const ticks = BigInt(Date.now()) * 10000n + 621355968000000000n;
  const roundedTicks = ticks - (ticks % 3000000000n);
  const input = `${roundedTicks}${TOKEN}`;
  return sha256Hex(input);
}

function sha256Hex(input: string): string {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  // We'll use the async version in the handler
  return input; // placeholder, actual impl uses crypto.subtle
}

async function computeSecMsGec(): Promise<string> {
  const ticks = BigInt(Date.now()) * 10000n + 621355968000000000n;
  const roundedTicks = ticks - (ticks % 3000000000n);
  const input = `${roundedTicks}${TOKEN}`;
  const encoder = new TextEncoder();
  const hash = await crypto.subtle.digest('SHA-256', encoder.encode(input));
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

function buildConfigPayload(): string {
  return [
    'Content-Type:application/json; charset=utf-8',
    'Path:speech.config',
    '',
    JSON.stringify({
      context: {
        synthesis: {
          audio: {
            metadataoptions: { sentenceBoundaryEnabled: 'false', wordBoundaryEnabled: 'false' },
            outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
          },
        },
      },
    }),
  ].join('\r\n');
}

function buildSsmlPayload(text: string, voice: string, rate: string, pitch: string): string {
  const requestId = generateId();
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const ssml =
    `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-IN'>` +
    `<voice name='${voice}'>` +
    `<prosody rate='${rate}' pitch='${pitch}'>` +
    escaped +
    `</prosody></voice></speak>`;

  return [
    `X-RequestId:${requestId}`,
    'Content-Type:application/ssml+xml',
    'Path:ssml',
    '',
    ssml,
  ].join('\r\n');
}

interface TtsRequest {
  text: string;
  voice?: string;
  rate?: string;
  pitch?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS });
    }

    let body: TtsRequest;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400, headers: CORS_HEADERS });
    }

    const { text, voice = 'en-IN-NeerjaNeural', rate = '+0%', pitch = '+0Hz' } = body;
    if (!text || text.length > 5000) {
      return new Response('Text required (max 5000 chars)', { status: 400, headers: CORS_HEADERS });
    }

    try {
      const audio = await synthesize(text, voice, rate, pitch);
      return new Response(audio, {
        headers: {
          ...CORS_HEADERS,
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'TTS failed';
      return new Response(msg, { status: 502, headers: CORS_HEADERS });
    }
  },
};

async function synthesize(text: string, voice: string, rate: string, pitch: string): Promise<ArrayBuffer> {
  const secMsGec = await computeSecMsGec();
  const connId = generateId();
  const url = `${WSS_URL}?TrustedClientToken=${TOKEN}&ConnectionId=${connId}&Sec-MS-GEC=${secMsGec}&Sec-MS-GEC-Version=1-130.0.2849.68`;

  const ws = new WebSocket(url);
  const audioChunks: ArrayBuffer[] = [];

  return new Promise<ArrayBuffer>((resolve, reject) => {
    let resolved = false;

    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        ws.close();
        reject(new Error('Timeout'));
      }
    }, 15000);

    ws.addEventListener('open', () => {
      ws.send(buildConfigPayload());
      ws.send(buildSsmlPayload(text, voice, rate, pitch));
    });

    ws.addEventListener('message', (event) => {
      if (typeof event.data === 'string') {
        if (event.data.includes('Path:turn.end')) {
          resolved = true;
          clearTimeout(timeout);
          ws.close();
          if (audioChunks.length > 0) {
            const total = audioChunks.reduce((sum, c) => sum + c.byteLength, 0);
            const result = new Uint8Array(total);
            let offset = 0;
            for (const chunk of audioChunks) {
              result.set(new Uint8Array(chunk), offset);
              offset += chunk.byteLength;
            }
            resolve(result.buffer);
          } else {
            reject(new Error('No audio'));
          }
        }
      } else if (event.data instanceof ArrayBuffer) {
        const buf = event.data;
        if (buf.byteLength < 2) return;
        const view = new DataView(buf);
        const headerLen = view.getUint16(0);
        if (buf.byteLength > headerLen + 2) {
          audioChunks.push(buf.slice(headerLen + 2));
        }
      }
    });

    ws.addEventListener('error', () => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        reject(new Error('WebSocket error'));
      }
    });

    ws.addEventListener('close', () => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        if (audioChunks.length > 0) {
          const total = audioChunks.reduce((sum, c) => sum + c.byteLength, 0);
          const result = new Uint8Array(total);
          let offset = 0;
          for (const chunk of audioChunks) {
            result.set(new Uint8Array(chunk), offset);
            offset += chunk.byteLength;
          }
          resolve(result.buffer);
        } else {
          reject(new Error('Closed without audio'));
        }
      }
    });
  });
}
