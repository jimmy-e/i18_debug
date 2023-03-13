import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  };
}

const Home: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <h1>Common</h1>
      <p>{t('bar', { ns: 'common' })}</p>
      <p>{t('baz', { ns: 'common' })}</p>
    </>
  );
};

export default Home;
