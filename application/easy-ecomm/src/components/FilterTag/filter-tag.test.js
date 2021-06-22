import FilterTag from './filter-tag';

import { renderWithTheme } from '../../../test-utils';

describe('[Components] - filter-tag', () => {
  test('should render correctly', () => {
    const el = renderWithTheme(<FilterTag />);
    expect(el).toMatchSnapshot();
  });
});
