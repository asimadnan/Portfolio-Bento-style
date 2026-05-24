import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Asim Adnan Eijaz',
  description: 'Asim Adnan Eijaz\'s Portfolio',
  generator: 'Asim',
}

const themeInitScript = `
(function () {
  try {
    var preference = window.localStorage.getItem("themePreference");
    window.localStorage.removeItem("theme");
    var theme = preference === "light" || preference === "dark"
      ? preference
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  } catch (error) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
         <GoogleAnalytics gaId="G-L8JYV438HW" />
      </body>
    </html>
  )
}
