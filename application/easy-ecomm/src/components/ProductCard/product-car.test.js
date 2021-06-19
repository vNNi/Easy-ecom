import { renderWithTheme } from '../../../test-utils';

import ProductCard from './product-card';

describe('[Components] - product card', () => {
  test('should expect', () => {
    const comp = renderWithTheme(<ProductCard />);
    expect(comp).toMatchSnapshot();
    expect(1).toBe(1);
  });
});
