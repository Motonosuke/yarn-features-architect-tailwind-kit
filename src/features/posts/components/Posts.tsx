import React from 'react';

import { LoadingSpinner } from 'components/Loading';
import { usePosts } from 'features/posts/hooks';

export const Posts: React.FunctionComponent = () => {
  const { postsData } = usePosts();

  if (!postsData) return <LoadingSpinner />;

  return (
    <ul>
      {postsData?.map((post) => (
        <li key={post.id}>{post.body}</li>
      ))}
    </ul>
  );
};
