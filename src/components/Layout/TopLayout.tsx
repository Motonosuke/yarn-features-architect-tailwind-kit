import type { CustomLayout } from 'next';

import { Header } from 'components/Header';
import { Box } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';

export const TopLayout: CustomLayout = (page) => {
  return (
    <chakra.main>
      <Header />
      <Box height="100vh" mt={20} mx="auto" width="70vw">
        {page}
      </Box>
    </chakra.main>
  );
};
