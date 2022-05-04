import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/Magic_Spell.otf"
          as="font"
          crossOrigin=""
        />

        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Quattrocento:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicons */}
        {/* <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        /> */}

        {/* Icons */}
        <script
          src="https://kit.fontawesome.com/4af7875d4c.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="min-h-screen bg-green-900 font-body text-gray-100 antialiased">
        {/* <div style={{background-image: url()}}></div> */}

        {/* bg-gradient-to-br from-emerald-900 to-green-900 font-body text-gray-100 */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
