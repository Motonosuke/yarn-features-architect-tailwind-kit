import { NextPageContext } from 'next';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { COOKIE_KEYS } from 'constants/cookie-keys';

// テンプレートのためのサンプルコード（未使用コード）
export const setHogeId = (ctx: Pick<NextPageContext, 'res'> | null, token: string, expiresAt: Date): void => {
  setCookie(ctx, COOKIE_KEYS.HOGE_ID, token, {
    expires: expiresAt,
    path: '/',
  });
};

// CSRの場合はctxにnull
// SSRの場合はcontextを渡す
export const getHogeId = (ctx: Pick<NextPageContext, 'req'> | null = null): string | undefined => {
  return parseCookies(ctx)[COOKIE_KEYS.HOGE_ID];
};

export const deleteToken = (ctx: Pick<NextPageContext, 'res'> | null = null): void => {
  destroyCookie(ctx, COOKIE_KEYS.HOGE_ID, { path: '/' });
};
