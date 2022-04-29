export const ROUTE_PATHS = {
  HOME: '/',
  LOGIN: '/login',
  SETTING: {
    ACCOUNT: '/setting/account',
    EMAIL: '/setting/email',
  },
} as const;

type SettingRouteType = typeof ROUTE_PATHS.SETTING;
type SettingRoute = SettingRouteType[keyof SettingRouteType];

export type RoutePathType = typeof ROUTE_PATHS.LOGIN | SettingRoute;
