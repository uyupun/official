import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta
          name="description"
          content="(´･ェ･｀)「あ、もしもし？ぅゅだけど…うん、そうぷんぽぷんぽ」"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
