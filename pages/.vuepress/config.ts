import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    locales: {
        '/': {
            lang: 'ja',
            title: '株式会社TWOTWO',
            description: '株式会社TWOTWOのホームページです。',
        },
        // '/en': {
        //     lang: 'en',
        //     title: 'TWOTWO co.,Ltd.',
        //     description: 'The homepage of TWOTWO co,.Ltd.',
        // },
        // '/cn': {
        //     lang: 'zh-CN',
        //     title: '株式会社TWOTWO',
        //     description: '株式会社TWOTWO的主页',
        // },
    },
  
  theme: defaultTheme({
      logo: '/images/logo.png',
      logoDark: '/images/logo-dark.png',
      locales: {
          '/': {
              selectLanguageText: '言語選択',
              selectLanguageAriaLabel: '言語選択',
              selectLanguageName: '日本語',
              navbar: [
                  {
                      text: '会社概要',
                      link: '/about',
                  },
                  {
                      text: 'サービス',
                      link: '/service',
                  },
                  {
                      text: '問い合わせ',
                      link: '/inquiry',
                  },
              ],
              
          },
          '/en': {
              selectLanguageText: 'Languages',
              selectLanguageAriaLabel: 'Languages',
              selectLanguageName: 'English',
          },
          '/cn': {
              selectLanguageText: '选择语言',
              selectLanguageAriaLabel: '选择语言',
              selectLanguageName: '简体中文',
          },
      },
  }),
})