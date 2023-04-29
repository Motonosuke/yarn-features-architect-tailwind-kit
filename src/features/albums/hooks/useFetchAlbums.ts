import { useGetAlbums } from 'features/albums/api';

export const useFetchAlbums = () => {
  const { data: albumsData } = useGetAlbums();

  return { albumsData };
};
