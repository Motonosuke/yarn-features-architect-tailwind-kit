import { CustomNextPage } from 'next';

import { HomePage } from 'page-components/home';
import { MainLayout } from 'page-layouts/main';

const Home: CustomNextPage = (props) => {
  return <HomePage {...props} />;
};

Home.getLayout = MainLayout;
export default Home;
