import currencyFormatter from './currencyFormatter';

describe('[Helper] - [Price] - [Currency]', () => {
  test('Should return BRl currency when language is pt-br', () => {
    const money = currencyFormatter({ value: 10, locale: 'pt-br' });
    expect(money).toMatch(/R\$.10,00/);
  });

  test('Should return BRl currency when language is pt-br and value is string', () => {
    const money = currencyFormatter({ value: '10', locale: 'pt-br' });
    expect(money).toMatch(/R\$.10,00/i);
  });

  test('Should return BRl currency when language is pt-br and value is string and with cents', () => {
    const money = currencyFormatter({ value: '10.00', locale: 'pt-br' });
    expect(money).toMatch(/R\$.10,00/i);
  });

  test('Should return currency format based in language', () => {
    const money = currencyFormatter({ value: '10', locale: 'en-US' });
    expect(money).toMatch(/\$10\.00/);
  });

  test('Should return not break when value is undefined and return 0.00', () => {
    const money = currencyFormatter({ locale: 'en-US' });
    expect(money).toMatch(/\$0\.00/);
  });

  test('Should return not break when locale is undefined and return based in pt-br', () => {
    expect(currencyFormatter({ value: 10 })).toMatch(/R\$.10,00/);
  });
});
