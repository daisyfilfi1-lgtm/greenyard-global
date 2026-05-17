import { cookies } from 'next/headers';
import { I18nProvider } from './index';

export async function I18nServerProvider({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value;
  const initialLang = lang === 'zh' ? 'zh' as const : 'en' as const;

  return (
    <I18nProvider initialLang={initialLang}>
      {children}
    </I18nProvider>
  );
}
