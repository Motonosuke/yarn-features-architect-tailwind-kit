import { useFetchPosts } from 'features/posts/api';

export const usePosts = () => {
  const { data: postsData } = useFetchPosts();

  return {
    postsData,
  };
};
