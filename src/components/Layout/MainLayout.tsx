import type { CustomLayout } from 'next';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Box } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';

export const MainLayout: CustomLayout = (page) => {
  return (
    <chakra.main>
      <Header />
      <Box height="calc(100vh - 128px)" mt={20} mx="auto" width="70vw">
        {page}
      </Box>
      <Footer />
    </chakra.main>
  );
};
