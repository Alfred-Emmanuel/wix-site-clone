import type { Metadata } from 'next'
import './globals.css'

import { Wix_Madefor_Display } from 'next/font/google'

//👇 Configure our font object
const wixMadeForDisplay = Wix_Madefor_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-wix-made-for-display',
})

export const metadata: Metadata = {
    title: 'NextGen Business Inn - Innovative Business Solutions',
    description:
        "NextGen Business Inn offers cutting-edge business solutions tailored for growth. From strategy consulting to tech integration, we've got you covered. Join us for innovative solutions that move your business forward.",
    keywords: 'business solutions, strategy consulting, tech integration, business growth',
    openGraph: {
        title: 'NextGen Business Inn - Innovative Business Solutions',
        description: 'NextGen Business Inn offers innovative solutions to help your business grow.',
        url: 'https://your-nextgen-site.com',
        images: '/images/nextgen-business.jpg',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NextGen Business Inn - Innovative Business Solutions',
        description: 'Providing cutting-edge business solutions.',
        images: '/images/nextgen-business.jpg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${wixMadeForDisplay.className}`}>
            <body>{children}</body>
        </html>
    )
}
