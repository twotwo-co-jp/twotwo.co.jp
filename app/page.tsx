import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="flex flex-col items-center">
      <Image
        src="/twotwo-logo.png"
        alt="logo"
        width={200}
        height={200}
        loading="eager"
      />
      <p className="text-2xl md:text-4xl font-bold mt-4">{t('slogan1')}</p>
      <p className="text-2xl md:text-4xl font-bold mt-4">{t('slogan2')}</p>
    </div>
  );
}
