import useSWR from 'swr';

import { Posts, PostsEntity } from 'features/posts/types';
import { axios } from 'libs/axios';

/**
 * Postsを取得
 * @returns
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
