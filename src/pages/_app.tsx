import 'modern-css-reset/dist/reset.min.css';
import Head from 'next/head';

import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
