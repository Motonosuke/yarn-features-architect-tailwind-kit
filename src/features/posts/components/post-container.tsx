import React from 'react';

import { Posts } from 'features/posts';

interface Props {
  data: Posts | undefined;
}

export const PostContainer: React.VoidFunctionComponent<Props> = ({ data }) => {
  return (
    <div>
      PostContainer
      <>
        {data?.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </>
    </div>
  );
};
