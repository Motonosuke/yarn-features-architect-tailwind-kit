import React from 'react';

import { Box } from 'components/Miscellaneous/Box';
import { useFetchPosts } from 'features/posts';
import { PostContainer } from 'features/posts/components/post-container';

const Post = () => {
  const { data } = useFetchPosts();
  return (
    <Box>
      index.page
      <>
        <PostContainer data={data} />
      </>
    </Box>
  );
};

export default Post;
