import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="flex flex-col items-center">
      <Image
        src="/twotwo-logo.webp"
        alt="TWOTWO logo"
        width={200}
        height={200}
        priority
        sizes="(max-width: 480px) 100px, (max-width: 768px) 150px, 200px"
        className="max-w-full h-auto"
      />
      <p className="text-2xl md:text-4xl font-bold mt-4">{t('slogan1')}</p>
      <p className="text-2xl md:text-4xl font-bold mt-4">{t('slogan2')}</p>
    </div>
  );
}
