import { FC } from 'react';

import { Albums } from 'features/albums/components';

export const AlbumsPage: FC = () => {
  return (
    <div>
      <p>Albums</p>
      <div>
        <Albums />
      </div>
    </div>
  );
};
