export const VALID_LOCALES = ['ja', 'zh', 'en'] as const;
export type Locale = typeof VALID_LOCALES[number];
