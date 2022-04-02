const storagePrefix = 'sample';

const storage = {
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  getToken: (): string => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
};

export default storage;
