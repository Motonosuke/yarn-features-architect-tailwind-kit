import React from 'react';

import { LoadingSpinner } from 'components/Loading';
import { useAlbumsState } from 'stores/albums';

export const Albums: React.FunctionComponent = () => {
  const { albums: albumsGlobalState } = useAlbumsState();

  if (!albumsGlobalState) return <LoadingSpinner />;

  return (
    <ul>
      {albumsGlobalState.map((album) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  );
};
