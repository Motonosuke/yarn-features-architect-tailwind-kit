import Link from 'next/link';
import React from 'react';

import { Box, Flex, HStack } from 'components/chakra-parts/Layout';
import { Text } from 'components/chakra-parts/Typography';
import { ROUTE_PATHS } from 'constants/route-paths';

export const Header = () => {
  return (
    <Flex
      alignItems="center"
      backgroundColor="pink.100"
      justifyContent="space-between"
      minHeight="64px"
      px={20}
      width="full"
    >
      <Box>
        <Link href={ROUTE_PATHS.HOME}>
          <Text>Home</Text>
        </Link>
      </Box>
      <HStack spacing={4}>
        <Text>aaa</Text>
        <Text>bbb</Text>
        <Text>ccc</Text>
      </HStack>
    </Flex>
  );
};
