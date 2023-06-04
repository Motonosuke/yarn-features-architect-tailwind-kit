import { useCallback } from 'react';

import { ROUTE_PATHS } from 'constants/route-paths';
import { NextUseRouter } from 'libs/router';

export const useGoToPage = () => {
  const router = NextUseRouter();

  const goToHomePage = useCallback(() => {
    router.push(ROUTE_PATHS.HOME);
  }, [router]);

  return { goToHomePage } as const;
};
