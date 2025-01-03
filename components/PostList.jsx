import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} imageUrl={post.imageUrl} />
      ))}
    </div>
  );
};

export default PostList;
