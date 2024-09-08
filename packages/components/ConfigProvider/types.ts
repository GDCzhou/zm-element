import type { Language, TranslatePair } from "@zm-element/locale";

export interface ConfigProviderProps {
  locale?: Language;
  extendsI18nMsg?: TranslatePair;
}
