import type { CustomLayout } from 'next';

import { Header } from 'components/Header';

// const HEADER_HEIGHT = 64;

export const MainLayout: CustomLayout = (page) => {
  return (
    <main>
      <Header />
      {/* <div height={`calc(100vh - ${HEADER_HEIGHT}px)`} mt={20} mx="auto" width="70vw"> */}
      <div>{page}</div>
    </main>
  );
};
