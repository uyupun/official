import 'modern-css-reset/dist/reset.min.css';
import { DefaultSeo } from 'next-seo';

import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title={process.env.NEXT_PUBLIC_APP_NAME}
        description="(´･ェ･｀)「あ、もしもし？ぅゅだけど…うん、そうぷんぽぷんぽ」"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
