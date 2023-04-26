import './globals.css'

import { Poppins, Inter } from 'next/font/google'
//Fontes

const inter = Inter({ 
  subsets: ['latin'] 
})

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});


import Nav from '../components/Nav';

export const metadata = {
  title: 'Next 13',
  description: 'Aplicação de aprendizado com o Next 13 '

}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={poppins.className}>
      <Nav/>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>

  )
}
