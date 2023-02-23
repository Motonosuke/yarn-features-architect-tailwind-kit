import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import { theme } from 'libs/chakra';
import { GlobalStateControlProvider } from 'providers/global-state-control-provider';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const NextApp: NextPage<AppProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <RecoilRoot>
      <ChakraProvider resetCSS={true} theme={theme}>
        <GlobalStateControlProvider>{getLayout(<Component {...pageProps} />)}</GlobalStateControlProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default NextApp;
