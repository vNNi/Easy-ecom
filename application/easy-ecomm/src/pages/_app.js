import { ThemeProvider } from 'styled-components';
import Theme from '../styles/theme';
import '../styles/reset.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
