import type { CustomLayout } from 'next';

import { Header } from 'components/Header';
import { Box } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';

const HEADER_HEIGHT = 64;

export const MainLayout: CustomLayout = (page) => {
  return (
    <chakra.main>
      <Header />
      <Box height={`calc(100vh - ${HEADER_HEIGHT}px)`} mt={20} mx="auto" width="70vw">
        {page}
      </Box>
    </chakra.main>
  );
};
