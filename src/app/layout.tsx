import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar.components";
import awsExports from "@/aws-exports";
import {Amplify} from "aws-amplify";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJs Amplify Demo',
  description: 'NextJs Amplify Demo Project',
}

Amplify.configure({...awsExports, ssr: true});

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
