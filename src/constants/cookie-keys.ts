type CookieKeys = {
  [key in string]: string;
};

export const COOKIE_KEYS = {
  HOGE_ID: 'hoge_id',
} as const satisfies CookieKeys;
