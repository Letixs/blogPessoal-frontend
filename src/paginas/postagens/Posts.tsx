import React from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  return (
    <>
      <Link to="posts" className='link'>
        <h1>Posts</h1>
      </Link>
    </>
  );
}

export default Posts;