import { useFetchPosts } from 'features/posts/apis';

export const usePosts = () => {
  const { data: postsData } = useFetchPosts();

  return {
    postsData,
  };
};
