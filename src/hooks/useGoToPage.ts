import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { ROUTE_PATHS } from 'constants/route-paths';

export const useGoToPage = () => {
  const router = useRouter();

  const goToHomePage = useCallback(() => {
    router.push(ROUTE_PATHS.HOME);
  }, [router]);

  return { goToHomePage } as const;
};
