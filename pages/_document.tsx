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
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600&display=swap"
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
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        /> */}
      </Head>
      <body className="bg-gradient-to-br from-emerald-900 to-green-900 text-gray-100 font-heading min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
