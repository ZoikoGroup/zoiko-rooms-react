export type LanguageCode = "EN" | "DE" | "FR" | "ES" | "PT";

export type Dictionary = Record<string, string>;

export type LanguageDictionaries = {
  DE: Dictionary;
  FR: Dictionary;
  ES: Dictionary;
  PT: Dictionary;
};
