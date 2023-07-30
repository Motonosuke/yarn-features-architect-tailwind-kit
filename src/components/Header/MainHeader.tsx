import { ROUTE_PATHS } from 'constants/route-paths';

import { NextLink } from 'libs/link';

export const MainHeader = () => {
  return (
    <header>
      <nav className="flex h-16 w-full items-center justify-between bg-pink-100 px-20">
        <NextLink href={ROUTE_PATHS.HOME}>
          <p>Home</p>
        </NextLink>
        <div className="flex gap-8">
          <p>aaa</p>
          <p>bbb</p>
          <p>ccc</p>
        </div>
      </nav>
    </header>
  );
};
