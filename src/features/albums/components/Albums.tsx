import React from 'react';

import { LoadingSpinner } from 'components/Loading';
import { UnorderedList, ListItem } from 'components/chakra-parts/DataDisplay';
import { useAlbumsState } from 'stores/albums';

export const Albums: React.FunctionComponent = () => {
  const { albums: albumsGlobalState } = useAlbumsState();

  if (!albumsGlobalState) return <LoadingSpinner />;

  return (
    <UnorderedList>
      {albumsGlobalState?.map((album) => (
        <ListItem key={album.id}>{album.title}</ListItem>
      ))}
    </UnorderedList>
  );
};
