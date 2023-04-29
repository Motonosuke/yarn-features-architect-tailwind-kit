import { CustomNextPage } from 'next';

import { MainLayout } from 'components/Layouts';
import { HomePage } from 'page-components/home';

const Home: CustomNextPage = () => {
  return <HomePage />;
};

Home.getLayout = MainLayout;
export default Home;
