import React from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

const App: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(App);
