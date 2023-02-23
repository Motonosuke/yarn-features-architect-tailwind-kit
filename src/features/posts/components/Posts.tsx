import React from 'react';

import { LoadingSpinner } from 'components/Loading';
import { UnorderedList, ListItem } from 'components/chakra-parts/DataDisplay';
import { usePosts } from 'features/posts/hooks';

export const Posts: React.FunctionComponent = () => {
  const { postsData } = usePosts();

  if (!postsData) return <LoadingSpinner />;

  return (
    <UnorderedList>
      {postsData?.map((post) => (
        <ListItem key={post.id}>{post.body}</ListItem>
      ))}
    </UnorderedList>
  );
};
