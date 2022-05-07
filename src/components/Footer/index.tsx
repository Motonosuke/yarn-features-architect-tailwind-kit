import React from 'react';

import { Box, Flex, HStack } from 'components/chakra-parts/Layout';
import { Text } from 'components/chakra-parts/Typography';

export const Footer = () => {
  return (
    <Flex
      alignItems="center"
      backgroundColor="blue.100"
      height="64px"
      justifyContent="space-between"
      px={10}
      width="full"
    >
      <HStack>
        <Text>aaa</Text>
        <Text>bbb</Text>
        <Text>ccc</Text>
      </HStack>
      <Box>
        <Text>ddd</Text>
      </Box>
    </Flex>
  );
};
