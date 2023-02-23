import { FC } from 'react';

import { Posts } from 'features/posts/components';

export const HomePage: FC = () => {
  return (
    <div>
      <p>Post</p>
      <div>
        <Posts />
      </div>
    </div>
  );
};
