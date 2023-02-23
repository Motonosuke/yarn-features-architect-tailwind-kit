import { Posts } from 'features/posts/types';

export const PostsActionTypes = {
  SET_POSTS: 'SET_POSTS',
};

const setPosts = (payload: { posts: Posts[] }) => ({
  payload,
  type: PostsActionTypes.SET_POSTS,
});

export type PostsAction = ReturnType<typeof setPosts>;
