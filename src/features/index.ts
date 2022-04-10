import { useFetchPosts } from 'features/posts';

export const repositories = {
  posts: {
    useFetchPosts,
  },
};

export type Repositories = typeof repositories;
