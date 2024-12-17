'use server'

import { cookies } from 'next/headers'

export async function setLanguage(locale: string) {
  (await
    cookies()).set('NEXT_LOCALE', locale, { 
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    path: '/' 
  })
}
