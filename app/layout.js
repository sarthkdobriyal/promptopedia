import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptopedia',
  description: 'Discover and Share all your chatgpt prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>promptopedia</title>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
