import { Inter as FontSans } from "next/font/google";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Toaster } from "@/components/ui/toaster"
import {locales} from '@/config';

import { cn } from "@/lib/utils"
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

type Props = {
    children: ReactNode;
    params: {locale: string};
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
    params: { locale }
}: Omit<Props, 'children'>) {
    const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

    return {
        title: t('title')
    }
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
    unstable_setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body
                className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
                )}
            >
                <NextIntlClientProvider>
                    {children}
                    <Toaster />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
