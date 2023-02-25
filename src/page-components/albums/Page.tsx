import { FC } from 'react';

import { Albums } from 'features/albums/components';

export const AlbumsPage: FC = () => {
  return (
    <div>
      <p className="text-2xl text-center">Albums</p>
      <div className="mt-20">
        <Albums />
      </div>
    </div>
  );
};
