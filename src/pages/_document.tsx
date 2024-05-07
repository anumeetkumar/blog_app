import React from "react";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <Script id="">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Script>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
