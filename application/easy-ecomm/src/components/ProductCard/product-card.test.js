import { renderWithTheme } from '../../../test-utils';

import ProductCard from './product-card';

describe('[Components] - product card', () => {
  test('should render correctly', () => {
    const comp = renderWithTheme(<ProductCard />);
    expect(comp).toMatchSnapshot();
  });
});
