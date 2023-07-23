import 'modern-css-reset/dist/reset.min.css';
import Head from 'next/head';

import type { AppProps } from 'next/app';
import type { FC } from 'react';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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
