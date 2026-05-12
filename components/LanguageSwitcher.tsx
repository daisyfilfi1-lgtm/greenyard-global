'use client';

import { useI18n } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  const toggle = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      onClick={toggle}
      className="text-xs text-[#757575] tracking-wider hover:text-[#1A1A1A] transition-colors cursor-pointer"
      aria-label={lang === 'en' ? 'Switch to Chinese' : '切换到英文'}
    >
      {lang === 'en' ? '中文' : 'EN'}
    </button>
  );
}
