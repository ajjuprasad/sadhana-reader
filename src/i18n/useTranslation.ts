import { useCallback } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

export function useTranslation() {
  const lang = useLanguage();

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      let text = translations[lang]?.[key] ?? translations.en[key] ?? key;
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          text = text.replace(`{${k}}`, String(v));
        }
      }
      return text;
    },
    [lang],
  );

  return { t, language: lang };
}
