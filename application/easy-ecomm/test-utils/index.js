import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import '@testing-library/jest-dom/extend-expect'; // jest-dom custom assertions
import 'jest-styled-components';

import Theme from '../src/styles/theme';

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export const renderWithTheme = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
