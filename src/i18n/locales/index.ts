import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { nl } from './nl';
import { it } from './it';
import { pl } from './pl';

export const locales = {
  en,
  de,
  ru,
  nl,
  it,
  pl,
};

export type SupportedLanguage = keyof typeof locales;
export type { Translation } from './en';
