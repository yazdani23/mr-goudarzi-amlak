import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import Store from '@/redux/store'
import { metadata } from '@/utils/constants'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    // <Provider store={Store}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    // </Provider>
  )
}


