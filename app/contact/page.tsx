import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getLocale } from "next-intl/server"
import { Mail, PhoneCall } from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const titles = { ja: "お問い合わせ", zh: "联系我们", en: "Contact Us" };
  const descriptions = {
    ja: "株式会社TWOTWOへのお問い合わせはこちら。",
    zh: "联系株式会社TWOTWO。",
    en: "Contact TWOTWO Co., Ltd.",
  };
  return {
    title: titles[locale as keyof typeof titles] ?? "お問い合わせ",
    description: descriptions[locale as keyof typeof descriptions] ?? descriptions.ja,
  };
}

export default function Contact() {
  const t = useTranslations('contact')
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">{t('title')}</h1>
        <div className="flex items-center justify-start space-x-4">
          <Mail className="w-8 h-8 text-primary" />
          <a 
            href="mailto:contact@twotwo.co.jp" 
            className="text-2xl font-medium text-primary hover:underline"
          >
            contact@twotwo.co.jp
          </a>
        </div>
        <div className="flex items-center justify-start space-x-4">
          <PhoneCall className="w-8 h-8 text-primary" />
          <a 
            href="tel:03-6820-6080" 
            className="text-2xl font-medium text-primary hover:underline"
          >
            03-6820-6080
          </a>
        </div>
      </div>
    </div>
  )
}
