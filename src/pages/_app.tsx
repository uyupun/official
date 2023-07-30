import 'modern-css-reset/dist/reset.min.css';
import Head from 'next/head';

import { cica } from '@/styles/font';

import type { AppProps } from 'next/app';
import type { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <div className={cica.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
