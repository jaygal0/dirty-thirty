import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Sahar turns 30" />
        <link rel="icon" href="/crown-yellow.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Sora:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Lazer84.ttf"
          as="font"
          crossOrigin="true"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
