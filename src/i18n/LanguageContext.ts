import { createContext, useContext } from 'react';
import type { Language } from '../hooks/useSettings';

const LanguageContext = createContext<Language>('en');

export const LanguageProvider = LanguageContext.Provider;

export function useLanguage(): Language {
  return useContext(LanguageContext);
}
