import type { CustomLayout } from 'next';

import { Header } from 'components/Header';

// const HEADER_HEIGHT = 64;

export const MainLayout: CustomLayout = (page) => {
  return (
    <main>
      <Header />
      <div className="w-4/5  mx-auto mt-10">{page}</div>
    </main>
  );
};
