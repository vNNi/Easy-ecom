import ProductList from './product-list';
import { renderWithTheme } from '../../../test-utils';

describe('[Components] - product-list', () => {
  test('should render correclty', () => {
    const element = renderWithTheme(<ProductList />);
    expect(element).toMatchSnapshot();
  });
});
