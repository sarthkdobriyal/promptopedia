import '../styles/globals.css'
import Navbar from '@components/Navbar';

export const metadata = {
  title: 'Promptopedia',
  description: 'Discover and Share all your chatgpt prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>promptopedia</title>
      <body>
      <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Navbar />
          {children}
        </main>
        </body>
    </html>
  )
}
