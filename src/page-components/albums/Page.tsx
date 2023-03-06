import { FC } from 'react';

import { Albums } from 'features/albums/components';

export const AlbumsPage: FC = () => {
  return (
    <div>
      <p className="text-center text-2xl">Albums</p>
      <div className="mt-20">
        <Albums />
      </div>
    </div>
  );
};
