import { CustomNextPage } from 'next';

import { MainLayout } from 'components/Layouts';
import { AlbumsPage } from 'page-components/albums';

const Albums: CustomNextPage = (props) => {
  return <AlbumsPage {...props} />;
};

Albums.getLayout = MainLayout;
export default Albums;
