import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar.components";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJs Amplify Demo',
  description: 'NextJs Amplify Demo Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
