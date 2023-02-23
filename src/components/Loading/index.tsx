import React from 'react';

import { Spinner } from 'components/chakra-parts/Feedback';
import { Box } from 'components/chakra-parts/Layout';

export const LoadingSpinner = () => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column" h="100vh" justifyContent="center" w="100vw">
      <Spinner color="primary.400" size="xl" thickness="4px" />
    </Box>
  );
};
