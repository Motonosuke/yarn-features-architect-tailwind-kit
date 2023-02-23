import { FC } from 'react';

import { Box } from 'components/chakra-parts/Layout';
import { Text } from 'components/chakra-parts/Typography';
import { Albums } from 'features/albums/components';

export const AlbumsPage: FC = () => {
  return (
    <Box>
      <Text>Albums</Text>
      <Box mt={20}>
        <Albums />
      </Box>
    </Box>
  );
};
