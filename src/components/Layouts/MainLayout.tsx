import { RecoilRoot } from 'recoil';

import type { CustomLayout } from 'next';

import { MainHeader } from 'components/Header';
import { GlobalStateMainLayoutProvider } from 'providers/global-state-control-provider/global-state-main-layout-provider';

export const MainLayout: CustomLayout = (page) => {
  return (
    <RecoilRoot>
      <GlobalStateMainLayoutProvider>
        <MainHeader />
        <main>
          <div className="mx-auto mt-10 w-4/5">{page}</div>
        </main>
      </GlobalStateMainLayoutProvider>
    </RecoilRoot>
  );
};
