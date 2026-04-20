const TTS_ENDPOINT = import.meta.env.VITE_TTS_ENDPOINT || '';

export interface EdgeTtsOptions {
  voice: string;
  rate?: string;
  pitch?: string;
}

export async function synthesize(text: string, options: EdgeTtsOptions): Promise<Blob> {
  if (!TTS_ENDPOINT) {
    throw new Error('TTS endpoint not configured');
  }

  const { voice, rate = '+0%', pitch = '+0Hz' } = options;

  const response = await fetch(TTS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, voice, rate, pitch }),
  });

  if (!response.ok) {
    throw new Error(`TTS request failed: ${response.status}`);
  }

  return response.blob();
}

export const VOICES = {
  female: 'en-IN-NeerjaNeural',
  male: 'en-IN-PrabhatNeural',
} as const;
