import { Head, Html, Main, NextScript } from 'next/document';

import type { FC } from 'react';

const Document: FC = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta content={process.env.NEXT_PUBLIC_DESC} name="description" />

        <meta content={process.env.NEXT_PUBLIC_TITLE} property="og:title" />
        <meta content={process.env.NEXT_PUBLIC_DESC} property="og:description" />
        <meta
          content="https://raw.githubusercontent.com/uyupun/official/main/public/images/ogp/ogp-image.png"
          property="og:image"
        />
        <meta content={process.env.NEXT_PUBLIC_TITLE} property="og:image:alt" />
        <meta content="image/png" property="og:image:type" />
        <meta content="https://uyupun.tech" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="ja_JP" property="og:locale" />

        <meta content="summary_large_image" name="twitter:card" />
        <meta content={process.env.NEXT_PUBLIC_TITLE} name="twitter:title" />
        <meta content={process.env.NEXT_PUBLIC_DESC} name="twitter:description" />
        <meta content="@uyupunpopunpo" name="twitter:site" />
        <meta
          content="https://raw.githubusercontent.com/uyupun/official/main/public/images/ogp/twitter-image.png"
          name="twitter:image"
        />
        <meta content={process.env.NEXT_PUBLIC_TITLE} name="twitter:image:alt" />

        <link href="/favicon.ico" rel="icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
