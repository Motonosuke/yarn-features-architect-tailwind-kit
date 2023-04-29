import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { Albums } from 'features/albums/types';

type AlbumsState = {
  albums: Albums | null;
};

const albumsRecoilState = atom<AlbumsState>({
  default: { albums: null },
  key: 'albumsState',
});

/**
 * アルバム一覧を取得
 * @returns Albums | null
 */
export const useAlbumsState = () => {
  return useRecoilValue(albumsRecoilState);
};

/**
 * アルバム一覧を更新
 */
export const useAlbumsMutators = () => {
  const setState = useSetRecoilState(albumsRecoilState);
  const setAlbumsState = useCallback((albums: Albums | null) => setState({ albums }), [setState]);
  return { setAlbumsState };
};
