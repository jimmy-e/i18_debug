import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'ui',
      ])),
    },
  };
}

const Home: React.FC = () => {
  const { t } = useTranslation(['common', 'ui']);

  return (
    <>
      <h1>Common</h1>
      <p>{t('bar', { ns: 'common' })}</p>
      <h1>UI</h1>
      <p>{t('label', { ns: 'ui::button '})}</p>
    </>
  );
};

export default Home;
