import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'jobmq.com',
  description: 'find you next job on top of your finger',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* <header className='h-20 fixed top-0 left-0 z-50 right-0 drop-shadow-xl flex justify-start items-center bg-gray-50'>
            <div className='container'>
              <Link href={'/'}>
                <h1 className='text-3xl font-extrabold text-black '>JobMq</h1>
              </Link>
            </div>
          </header> */}
          <Header />
          <main className=''>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
