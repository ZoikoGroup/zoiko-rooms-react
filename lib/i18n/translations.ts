import type { Dictionary, LanguageDictionaries } from "./types";
import { navbarFooterDictionary } from "./dictionaries/navbar-footer";
import { sharedUiDictionary } from "./dictionaries/shared-ui";

export type { LanguageCode } from "./types";

function mergeDictionaries(...dictionaries: LanguageDictionaries[]): LanguageDictionaries {
  const merged: LanguageDictionaries = { DE: {}, FR: {}, ES: {}, PT: {} };
  for (const dictionary of dictionaries) {
    (Object.keys(merged) as (keyof LanguageDictionaries)[]).forEach((lang) => {
      Object.assign(merged[lang], dictionary[lang]);
    });
  }
  return merged;
}

export const translations: Record<keyof LanguageDictionaries, Dictionary> = mergeDictionaries(
  navbarFooterDictionary,
  sharedUiDictionary,
);
