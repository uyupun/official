import { Head, Html, Main, NextScript } from 'next/document';

import type { FC } from 'react';

const Document: FC = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESC} />

        <meta property="og:title" content={process.env.NEXT_PUBLIC_TITLE} />
        <meta property="og:description" content={process.env.NEXT_PUBLIC_DESC} />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/uyupun/official/main/public/images/ogp/ogp-image.png"
        />
        <meta property="og:image:alt" content={process.env.NEXT_PUBLIC_TITLE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://uyupun.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={process.env.NEXT_PUBLIC_TITLE} />
        <meta name="twitter:description" content={process.env.NEXT_PUBLIC_DESC} />
        <meta name="twitter:site" content="@uyupunpopunpo" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/uyupun/official/main/public/images/ogp/twitter-image.png"
        />
        <meta name="twitter:image:alt" content={process.env.NEXT_PUBLIC_TITLE} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
