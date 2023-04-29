import { useGetPosts } from 'features/posts/apis';

export const useFetchPosts = () => {
  const { data: postsData } = useGetPosts();

  return {
    postsData,
  };
};
