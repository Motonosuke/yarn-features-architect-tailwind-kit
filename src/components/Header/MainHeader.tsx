import Link from 'next/link';

import { ROUTE_PATHS } from 'constants/route-paths';

export const MainHeader = () => {
  return (
    <header>
      <nav className="flex h-16 w-full items-center justify-between bg-pink-100 px-20">
        <Link href={ROUTE_PATHS.HOME}>
          <p>Home</p>
        </Link>
        <div className="flex gap-8">
          <p>aaa</p>
          <p>bbb</p>
          <p>ccc</p>
        </div>
      </nav>
    </header>
  );
};
