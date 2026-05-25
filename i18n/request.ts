import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
import { VALID_LOCALES, type Locale } from '@/lib/i18n';

export default getRequestConfig(async () => {
  const rawLocale = (await cookies()).get('NEXT_LOCALE')?.value;
  const locale: Locale = VALID_LOCALES.includes(rawLocale as Locale) ? rawLocale as Locale : 'ja';

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});