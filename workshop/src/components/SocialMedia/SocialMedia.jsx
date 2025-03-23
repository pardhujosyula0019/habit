import React, { useState, useEffect } from 'react';
import Post from '../Post/Post.jsx';
import PostForm from '../PostForm/PostForm.jsx';
import './SocialMedia.css';

function SocialMedia() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your API
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const addPost = async (newPost) => {
    //optimistically update the ui
    setPosts([newPost, ...posts])

    //make api call
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    const data = await response.json();
    // setPosts([data, ...posts]);  // Add to the beginning of the list
  };

  return (
    <div className="social-media">
      <h1>Social Feed</h1>
      <PostForm onPost={addPost} />
      <div className="posts">
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;