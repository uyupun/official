import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESC} />

        <meta property="og:title" content={process.env.NEXT_PUBLIC_TITLE} />
        <meta property="og:description" content={process.env.NEXT_PUBLIC_DESC} />
        <meta property="og:image" content="https://i.imgur.com/8a6Rp4N.png" />
        <meta property="og:url" content="https://uyupun.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={process.env.NEXT_PUBLIC_TITLE} />
        <meta name="twitter:description" content={process.env.NEXT_PUBLIC_DESC} />
        <meta name="twitter:site" content="@uyupunpopunpo" />
        <meta name="twitter:image" content="https://i.imgur.com/8a6Rp4N.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
