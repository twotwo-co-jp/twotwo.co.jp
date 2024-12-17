import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // 从 cookie 中读取语言设置，如果没有则默认使用日语
  const locale = (await cookies()).get('NEXT_LOCALE')?.value || 'ja';

  return {
    locale,
    messages: (await import('@/messages/' + `${locale}.json`)).default
  };
});