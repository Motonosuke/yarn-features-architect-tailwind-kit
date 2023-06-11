import { useGetAlbums } from 'features/albums/api';

/**
 * @package
 */
export const useFetchAlbums = () => {
  const { data: albumsData } = useGetAlbums();

  return { albumsData };
};
