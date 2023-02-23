import { useFetchPosts } from '../api';

export const usePosts = () => {
  const { data: postsData } = useFetchPosts();

  return {
    postsData,
  };
};
