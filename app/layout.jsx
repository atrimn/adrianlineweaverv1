import '../styles/globals.css'
import Header from './header'
import Hero from './hero'
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='flex h-full flex-col bg-zinc-50 dark:bg-black'>
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  )
}
