import Link from 'next/link';

import { ROUTE_PATHS } from 'constants/route-paths';

export const Header = () => {
  return (
    <div
    // alignItems="center"
    // backgroundColor="pink.100"
    // justifyContent="space-between"
    // minHeight="64px"
    // px={20}
    // width="full"
    >
      <div>
        <Link href={ROUTE_PATHS.HOME}>
          <p>Home</p>
        </Link>
      </div>
      <div>
        <p>aaa</p>
        <p>bbb</p>
        <p>ccc</p>
      </div>
    </div>
  );
};
