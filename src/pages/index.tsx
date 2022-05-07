import type { CustomNextPage } from 'next';

import { MainLayout } from 'components/Layout';
import { Box } from 'components/chakra-parts/Layout/Box';

const Home: CustomNextPage = () => {
  return (
    <Box>
      <p>Top Page</p>
    </Box>
  );
};

Home.getLayout = MainLayout;
export default Home;
