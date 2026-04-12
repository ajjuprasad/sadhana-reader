import { useState, useEffect, useCallback } from 'react';

export interface Settings {
  fontSize: number;
  deepamMode: boolean;
  contemplationMode: boolean;
}

const STORAGE_KEY = 'sadhana-reader-settings';

const defaultSettings: Settings = {
  fontSize: 18,
  deepamMode: false,
  contemplationMode: false,
};

function loadSettings(): Settings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) };
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
    document.documentElement.setAttribute(
      'data-theme',
      settings.deepamMode ? 'deepam' : 'light'
    );
  }, [settings.deepamMode]);

  const updateFontSize = useCallback((size: number) => {
    setSettings((s) => ({ ...s, fontSize: size }));
  }, []);

  const toggleDeepamMode = useCallback(() => {
    setSettings((s) => ({ ...s, deepamMode: !s.deepamMode }));
  }, []);

  const toggleContemplationMode = useCallback(() => {
    setSettings((s) => ({ ...s, contemplationMode: !s.contemplationMode }));
  }, []);

  return {
    settings,
    updateFontSize,
    toggleDeepamMode,
    toggleContemplationMode,
  };
}
