'use server'

import { cookies } from 'next/headers'
import { VALID_LOCALES, type Locale } from '@/lib/i18n'

export async function setLanguage(locale: string) {
  if (!VALID_LOCALES.includes(locale as Locale)) return;
  (await cookies()).set('NEXT_LOCALE', locale, {
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    path: '/'
  })
}
