import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import SideNav from "@/components/layouts/side-nav";
import { Navigation } from "@/components/layouts/nav";
import { Separator } from "@/components/ui/separator";
import { ChangeLanguage } from "@/components/layouts/lang";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | 株式会社TWOTWO',
    default: '株式会社TWOTWO',
  },
  description: '株式会社TWOTWOのホームページです。',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${notoSansJP.variable} ${notoSansSC.variable} antialiased flex flex-col min-h-[100dvh] bg-background text-foreground scrollbar-gutter-stable overflow-y-scroll`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className="flex items-center h-16 px-8">
            <SideNav />
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="logo"
                width={32}
              />
              <div className="hidden md:block font-bold text-lg">株式会社TWOTWO</div>
            </Link>
            <div className="flex-1 flex justify-end gap-4">
              <Navigation />
              <ChangeLanguage locale={locale.toString()} />
            </div>
          </header>
          <Separator />
          <main className="flex flex-1 justify-center p-8">
          {children}
          </main>
          <Separator />
          <footer className="flex items-center justify-center h-16">
            &copy; 2020 TWOTWO Co.,Ltd.
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
