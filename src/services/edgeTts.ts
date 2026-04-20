const TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const WSS_URL = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TOKEN}&ConnectionId=`;

function generateId(): string {
  return crypto.randomUUID().replace(/-/g, '');
}

function buildConfigMessage(): string {
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

function buildSsmlMessage(text: string, voice: string, rate: string, pitch: string): string {
  const requestId = generateId();
  const escapedText = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>` +
    `<voice name='${voice}'>` +
    `<prosody rate='${rate}' pitch='${pitch}'>` +
    escapedText +
    `</prosody></voice></speak>`;

  return [
    `X-RequestId:${requestId}`,
    'Content-Type:application/ssml+xml',
    'Path:ssml',
    '',
    ssml,
  ].join('\r\n');
}

export interface EdgeTtsOptions {
  voice: string;
  rate?: string;
  pitch?: string;
}

export function synthesize(text: string, options: EdgeTtsOptions): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const { voice, rate = '+0%', pitch = '+0Hz' } = options;
    const connId = generateId();
    let ws: WebSocket;

    try {
      ws = new WebSocket(WSS_URL + connId);
    } catch (err) {
      reject(new Error('WebSocket connection failed'));
      return;
    }

    const audioChunks: ArrayBuffer[] = [];
    let resolved = false;

    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        ws.close();
        reject(new Error('TTS timeout'));
      }
    }, 30000);

    ws.onopen = () => {
      ws.send(buildConfigMessage());
      ws.send(buildSsmlMessage(text, voice, rate, pitch));
    };

    ws.onmessage = (event) => {
      if (event.data instanceof Blob) {
        event.data.arrayBuffer().then((buf) => {
          const view = new DataView(buf);
          if (buf.byteLength < 2) return;
          const headerLen = view.getUint16(0);
          if (buf.byteLength > headerLen + 2) {
            audioChunks.push(buf.slice(headerLen + 2));
          }
        });
      } else if (typeof event.data === 'string') {
        if (event.data.includes('Path:turn.end')) {
          resolved = true;
          clearTimeout(timeout);
          ws.close();
          if (audioChunks.length > 0) {
            resolve(new Blob(audioChunks, { type: 'audio/mpeg' }));
          } else {
            reject(new Error('No audio data received'));
          }
        }
      }
    };

    ws.onerror = () => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        reject(new Error('WebSocket error'));
      }
    };

    ws.onclose = () => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        if (audioChunks.length > 0) {
          resolve(new Blob(audioChunks, { type: 'audio/mpeg' }));
        } else {
          reject(new Error('Connection closed without audio'));
        }
      }
    };
  });
}

export const VOICES = {
  female: 'en-IN-NeerjaNeural',
  male: 'en-IN-PrabhatNeural',
} as const;
