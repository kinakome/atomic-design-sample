import React from 'react';
import { AppProps } from 'next/app';
import 'sanitize.css';
import 'styles/globals.scss';
import { Header } from 'components/organisms/Header/Header';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="component-wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
