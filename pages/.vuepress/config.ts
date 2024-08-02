import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    bundler: viteBundler(),
    locales: {
        '/': {
            lang: 'ja',
            title: '株式会社TWOTWO',
            description: '株式会社TWOTWOのホームページです。'
        },

        '/en/': {
            lang: 'en',
            title: 'TWOTWO co.,Ltd.'
        }
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
                    { text: '会社概要', link: '/about' },
                    { text: 'サービス', link: '/service' },
                    { text: '問い合わせ', link: 'inquiry' }
                ]
            },

            '/en/': {
                selectLanguageText: 'Languages',
                selectLanguageAriaLabel: 'Languages',
                selectLanguageName: 'English',
                navbar: [
                    { text: 'Company Profile', link: '/en/about' },
                    { text: 'Services', link: '/en/service' },
                    { text: 'Contact', link: '/en/inquiry' }
                ]
            }
        }
    })
})