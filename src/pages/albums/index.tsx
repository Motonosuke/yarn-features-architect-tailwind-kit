import { CustomNextPage } from 'next';

import { MainLayout } from 'components/Layouts';
import { AlbumsPage } from 'page-components/albums';

const Albums: CustomNextPage = () => {
  return <AlbumsPage />;
};

Albums.getLayout = MainLayout;
export default Albums;
