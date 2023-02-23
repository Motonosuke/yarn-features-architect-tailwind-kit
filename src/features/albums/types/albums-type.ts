import * as z from 'zod';

const zAlbumScheme = z.object({
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});

export type Album = z.infer<typeof zAlbumScheme>;

const zAlbumsScheme = z.array(zAlbumScheme);

export type Albums = z.infer<typeof zAlbumsScheme>;

export class AlbumsEntity {
  readonly id!: number;
  readonly title!: string;
  readonly userId!: number;

  static new(res: Albums) {
    try {
      zAlbumsScheme.parse(res);
    } catch (error) {
      console.error(error, 'AlbumsEntity');
    }
    return res;
  }
}
