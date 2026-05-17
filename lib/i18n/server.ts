import en, { type Dictionary } from './en';

export async function getDictionary(): Promise<Dictionary> {
  return en;
}
