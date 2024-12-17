"use client"

import { useTranslations } from "next-intl"

export default function Services() {
  const t = useTranslations('services')

  return (
    <article className="max-w-2xl mx-auto">
      <section className="space-y-8">
        <h1 className="text-3xl font-semibold text-center">{t('title')}</h1>
        <div className="space-y-8">
          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-medium">{t('development.title')}</h2>
            <p className="text-muted-foreground">{t('development.description')}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {['web', 'mobile', 'desktop'].map((item) => (
                <li key={item}>{t(`development.items.${item}`)}</li>
              ))}
            </ul>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-medium">{t('consulting.title')}</h2>
            <p className="text-muted-foreground">{t('consulting.description')}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {['architecture', 'optimization', 'security'].map((item) => (
                <li key={item}>{t(`consulting.items.${item}`)}</li>
              ))}
            </ul>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-medium">{t('solutions.title')}</h2>
            <p className="text-muted-foreground">{t('solutions.description')}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {['cloud', 'ai', 'data'].map((item) => (
                <li key={item}>{t(`solutions.items.${item}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
