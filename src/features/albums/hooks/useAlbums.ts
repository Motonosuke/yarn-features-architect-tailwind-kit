import { useFetchAlbums } from 'features/albums/api';

export const useAlbums = () => {
  const { data: albumsData } = useFetchAlbums();
  return { albumsData };
};
