import { LoadingSpinner } from 'components/Loading';

import { useFetchPosts } from 'features/posts/hooks';

export const Posts = () => {
  const { postsData } = useFetchPosts();

  if (!postsData) return <LoadingSpinner />;

  return (
    <ul>
      {postsData.map((post) => (
        <li key={post.id}>{post.body}</li>
      ))}
    </ul>
  );
};
