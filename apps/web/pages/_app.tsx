import React from 'react';
import { AppProps } from 'next/app';
import Layout from 'layout';
import { appWithTranslation } from 'next-i18next';
import 'tailwind-config/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(App);
