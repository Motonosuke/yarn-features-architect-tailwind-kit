import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { theme } from 'libs/chakra';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const NextApp: NextPage<AppProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
};

export default NextApp;
