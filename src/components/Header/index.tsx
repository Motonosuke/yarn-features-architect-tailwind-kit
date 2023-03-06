import Link from 'next/link';

import { ROUTE_PATHS } from 'constants/route-paths';

export const Header = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between bg-pink-100 px-20">
      <div>
        <Link href={ROUTE_PATHS.HOME}>
          <p>Home</p>
        </Link>
      </div>
      <div className="flex gap-8">
        <p>aaa</p>
        <p>bbb</p>
        <p>ccc</p>
      </div>
    </div>
  );
};
