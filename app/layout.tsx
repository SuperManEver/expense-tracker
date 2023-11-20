// vendor
import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import clsx from 'clsx'
import { ClerkProvider } from '@clerk/nextjs'

// ui
import MainNavbar from '@/app/components/navbar/main-navbar'

// styles
import './globals.css'
import css from './page.module.css'

const inter = Dosis({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(inter.className, css.pageContent)}>
          <main className={css.main}>
            <header className={css.header}>
              <h3 className={css.title}>Expenso</h3>
              <MainNavbar />
            </header>
            <section className={css.content}>{children}</section>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
