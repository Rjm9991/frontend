import { Fragment, ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import clsx from 'clsx';
import { ClashDisplayFont, HKGuiseFont } from '@haqq/website/shared';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import '../styles/global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </Head>

      <main
        className={clsx(
          ClashDisplayFont.variable,
          HKGuiseFont.variable,
          'min-h-screen flex flex-col overflow-x-clip font-sans',
        )}
      >
        <Header />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </Fragment>
  );
}
