type RoutePaths = {
  [key in string]: `/${string}` | { [key in string]: `/${string}` } | `https://${string}`;
};

export const ROUTE_PATHS = {
  HOME: '/',
  LOGIN: '/login',
  SETTING: {
    ACCOUNT: '/setting/account',
    EMAIL: '/setting/email',
  },
} as const satisfies RoutePaths;
