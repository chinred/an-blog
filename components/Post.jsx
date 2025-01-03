import React from 'react';
import './Post.css';

const Post = ({ title, imageUrl }) => {
  return (
    <div className="post">
      <img src={imageUrl} alt="Post Thumbnail" />
      <h2>{title}</h2>
    </div>
  );
};


export default Post;