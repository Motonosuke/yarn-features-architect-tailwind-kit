import { PostsAction, PostsActionTypes } from 'features/posts/actions';
import { Posts } from 'features/posts/types';

interface PostsState {
  posts: Posts[];
}

export const postsInitialState = {
  posts: [],
};

export const postsReducer = (state: PostsState, action: PostsAction) => {
  switch (action.type) {
    case PostsActionTypes.SET_POSTS: {
      return {
        ...state,
        posts: action.payload.posts,
      };
    }
  }
};
