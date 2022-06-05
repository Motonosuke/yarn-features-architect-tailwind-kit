import type { CustomNextPage } from 'next';

import { MainLayout } from 'components/Layout';
import { Box } from 'components/chakra-parts/Layout/Box';
import { Text } from 'components/chakra-parts/Typography';

const Home: CustomNextPage = () => {
  return (
    <Box>
      <Text>Top Page</Text>
    </Box>
  );
};

Home.getLayout = MainLayout;
export default Home;
