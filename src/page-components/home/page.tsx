import { FC } from 'react';

import { Box } from 'components/chakra-parts/Layout';
import { Text } from 'components/chakra-parts/Typography';
import { Posts } from 'features/posts/components';

export const HomePage: FC = () => {
  return (
    <Box>
      <Text>Post</Text>
      <Box mt={20}>
        <Posts />
      </Box>
    </Box>
  );
};
