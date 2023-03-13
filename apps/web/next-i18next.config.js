module.exports = {
  defaultNS: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  interpolation: {
    escapeValue: false,
  },
  keySeparator: '.',
  localeExtension: 'yml',
  localePath: '../../utils/copy',
  // we are currently not handling different languages, when we wil, we can do something
  // like `{{lng}}/{{ns}}`
  localeStructure: '{{ns}}',
  nsSeparator: '::',
};
