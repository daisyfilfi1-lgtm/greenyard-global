'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import en, { type Dictionary } from './en';
import zh from './zh';

type Lang = 'en' | 'zh';

const COOKIE_NAME = 'lang';

interface I18nContextValue {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  t: en,
  setLang: () => {},
});

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const cookieLang = getCookie(COOKIE_NAME);
    if (cookieLang === 'zh' || cookieLang === 'en') {
      setLangState(cookieLang);
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    setCookie(COOKIE_NAME, newLang);
  }, []);

  const t = lang === 'zh' ? (zh as unknown as Dictionary) : en;

  const value: I18nContextValue = {
    lang,
    t,
    setLang,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
