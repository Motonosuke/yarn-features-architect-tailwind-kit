import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

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
      <GlobalStateControlProvider>{getLayout(<Component {...pageProps} />)}</GlobalStateControlProvider>
    </RecoilRoot>
  );
};

export default NextApp;
