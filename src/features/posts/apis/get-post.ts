import useSWR from 'swr';

import { axios } from 'libs/axios';

import { Posts, PostsEntity } from 'features/posts/types';

/**
 * Postsを取得
 * @returns
 * @package
 */
export const useGetPosts = () => {
  return useSWR(`https://jsonplaceholder.typicode.com/posts`, (url: string) => getPosts(url), {
    suspense: false,
  });
};

const getPosts = async (url: string): Promise<Posts> => {
  const { data } = await axios.get<Posts>(url);
  return PostsEntity.new(data);
};
