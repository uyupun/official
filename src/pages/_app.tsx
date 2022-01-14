import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import 'modern-css-reset/dist/reset.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
