import React from 'react';
import './Post.css';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.authorAvatar || "default-avatar.png"} alt={post.authorName} className="post-avatar" />
        <div className="post-author">{post.authorName}</div>
      </div>
      <div className="post-content">
        <p>{post.text}</p>
        {post.image && <img src={post.image} alt="Post Image" />}
      </div>
      <div className="post-footer">
        {/* Add like, comment, share features here */}
      </div>
    </div>
  );
}

export default Post;