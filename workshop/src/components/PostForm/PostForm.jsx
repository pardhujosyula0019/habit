import React, { useState } from 'react';
import './PostForm.css';

function PostForm({ onPost }) {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      text: text,
      image: image ? URL.createObjectURL(image) : null, // Convert image to URL
      authorName: 'Current User', // Replace with actual user data
      authorAvatar: 'user-avatar.png', // Replace with actual user data
      timestamp: new Date().toISOString(),
    };

    onPost(newPost);
    setText('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;