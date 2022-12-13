import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
        <style>
          @import url(https://fonts.googleapis.com/css?family=Satisfy); @import
          url(https://fonts.googleapis.com/css?family=Six+Caps);
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
