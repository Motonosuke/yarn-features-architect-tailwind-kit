export const RoutePaths = {
  home: '/',
  login: '/login',
  setting: {
    account: '/setting/account',
    email: '/setting/email',
  },
} as const;

type SettingRouteType = typeof RoutePaths.setting;
type SettingRoute = SettingRouteType[keyof SettingRouteType];

export type RoutePathType = typeof RoutePaths.login | SettingRoute;
