import type { CustomLayout } from 'next';

import { MainHeader } from 'components/Header';

// const HEADER_HEIGHT = 64;

export const MainLayout: CustomLayout = (page) => {
  return (
    <>
      <MainHeader />
      <main>
        <div className="mx-auto mt-10 w-4/5">{page}</div>
      </main>
    </>
  );
};
