const currency = {
  'pt-br': 'BRL',
  'en-US': 'USD',
};
const currencyFormatter = ({ value = '', locale = 'pt-br' }) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency[locale],
  }).format(value);

export default currencyFormatter;
