import Link from 'next/link';

import { ROUTE_PATHS } from 'constants/route-paths';

export const Header = () => {
  return (
    <div className="flex justify-between items-center h-16 px-20 w-full bg-pink-100">
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
