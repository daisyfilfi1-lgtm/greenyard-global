import { cookies } from 'next/headers';
import en, { type Dictionary } from './en';
import zh from './zh';

export async function getDictionary(): Promise<Dictionary> {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value;
  return lang === 'zh' ? (zh as unknown as Dictionary) : en;
}
