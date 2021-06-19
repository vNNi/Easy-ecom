import { renderWithTheme } from '../../../test-utils';

import InputSearch from './input-search';

describe('[Components] - input search', () => {
  test('should render correctly', () => {
    const comp = renderWithTheme(<InputSearch />);
    expect(comp).toMatchSnapshot();
  });
});
