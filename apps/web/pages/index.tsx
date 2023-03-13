import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// todo: add typing
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'components',
        'copy',
        'foo',
      ])),
    },
  };
}

const Home: React.FC = () => {
  // const { t } = useTranslation(['components', 'copy', 'foo']);
  const { t } = useTranslation('foo');
  // const { t } = useTranslation('copy');

  return (
    <>
      <h1 className="text-2xl">Components</h1>
      <p>
        Submit:
        {' '}
        {t('buttons.submit', { ns: 'components' })}
      </p>
      <p>
        Cancel:
        {' '}
        {t('buttons.cancel', { ns: 'components' })}
      </p>
      <p>
        Purchase:
        {' '}
        {t('buttons.purchase', { ns: 'components' })}
      </p>
      <p>
        Title:
        {' '}
        {t('title')}
      </p>
      <h1 className="text-2xl">Copy</h1>
      <p>
        Hero:
        {' '}
        {t('hero', { ns: 'copy' })}
      </p>
      <p>
        Subtitle:
        {' '}
        {t('body.subTitle', { ns: 'copy' })}
      </p>
      <p>
        Section 2:
        {' '}
        {t('body.section2', { ns: 'copy' })}
      </p>
      <p>
        Section 2:
        {' '}
        {t('body.section2')}
      </p>
      <h1 className="text-2xl">Foo Folder</h1>
      <p>
        Bar:
        {' '}
        {t('bar')}
      </p>
      <p>
        Baz:
        {' '}
        {t('foo::test.baz')}
      </p>
    </>
  );
};

export default Home;
