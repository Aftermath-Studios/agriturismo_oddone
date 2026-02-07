import localFont from "next/font/local";

export const rowanFont = localFont({
    src: [
        {
            path: './fonts/rowan/Rowan-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/rowan/Rowan-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/rowan/Rowan-Semibold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/rowan/Rowan-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/rowan/Rowan-Italic.woff2',
            weight: '400',
            style: 'italic'
        },
        {
            path: './fonts/rowan/Rowan-BoldItalic.woff2',
            weight: '700',
            style: 'italic'
        }
    ],
    variable: '--font-rowan',
    display: 'swap'

})