import type { CustomLayout } from 'next';

import { MainHeader } from 'components/Header';

export const ErrorLayout: CustomLayout = (page) => {
  return (
    <>
      <MainHeader />
      <main>
        <div className="mx-auto mt-10 w-4/5">{page}</div>
      </main>
    </>
  );
};
