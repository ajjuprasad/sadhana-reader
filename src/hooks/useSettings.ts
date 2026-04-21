import { useState, useEffect, useCallback } from 'react';

export type Language = 'en' | 'hi' | 'kn' | 'te' | 'ta' | 'ml';
export type NarrationVoiceGender = 'female' | 'male';

export interface Settings {
  fontSize: number;
  deepamMode: boolean;
  hideSanskrit: boolean;
  language: Language;
  narrationVoice: NarrationVoiceGender;
}

const STORAGE_KEY = 'sadhana-reader-settings';

const defaultSettings: Settings = {
  fontSize: 18,
  deepamMode: false,
  hideSanskrit: false,
  language: 'en',
  narrationVoice: 'female',
};

function loadSettings(): Settings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if ('contemplationMode' in parsed && !('hideSanskrit' in parsed)) {
        parsed.hideSanskrit = parsed.contemplationMode;
        delete parsed.contemplationMode;
      }
      return { ...defaultSettings, ...parsed };
    }
  } catch {
    // ignore
  }
  return defaultSettings;
}

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(loadSettings);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const isDark = settings.deepamMode;
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'deepam' : 'light'
    );
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#1A1208' : '#FFF8E1');
  }, [settings.deepamMode]);

  const applySettings = useCallback((next: Settings) => {
    setSettings(next);
  }, []);

  return {
    settings,
    applySettings,
  };
}
