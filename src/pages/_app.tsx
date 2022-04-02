import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { theme } from 'components/theme/Theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default App;
