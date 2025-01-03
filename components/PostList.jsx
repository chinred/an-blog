import React from 'react';
import Post from './Post';
import './PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default PostList;