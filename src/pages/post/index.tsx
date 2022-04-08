import React from 'react';

import { useFetchPosts } from 'features/posts';
import { PostContainer } from 'features/posts/components/post-container';

const Post = () => {
  const { data } = useFetchPosts();
  return (
    <div>
      index.page
      <>
        <PostContainer data={data} />
      </>
    </div>
  );
};

export default Post;
