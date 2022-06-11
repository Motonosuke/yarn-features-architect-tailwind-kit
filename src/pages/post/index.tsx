import React from 'react';

import { Box } from 'components/chakra-parts/Layout/Box';
import { useFetchPosts } from 'features/posts';
import { PostContainer } from 'features/posts/components/post-container';

const Post = () => {
  const { data } = useFetchPosts();

  return (
    <Box>
      <PostContainer data={data} />
    </Box>
  );
};

export default Post;
