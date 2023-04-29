import * as z from 'zod';

const zPostScheme = z.object({
  body: z.string(),
  id: z.number(),
  title: z.string(),
  userId: z.number(),
});
const zPostsScheme = z.array(zPostScheme);

export type Post = z.infer<typeof zPostScheme>;
export type Posts = z.infer<typeof zPostsScheme>;

export class PostsEntity {
  readonly body!: string;
  readonly id!: number;
  readonly title!: string;
  readonly userId!: number;

  static new(res: Posts) {
    try {
      zPostScheme.parse(res);
    } catch (error) {
      console.error(error, 'PostsEntity');
    }
    return res;
  }
}
