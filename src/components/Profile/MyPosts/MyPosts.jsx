import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx'

const MyPosts = () => (
  <div>
    My post
    <div>New Posts</div>
    <div className={c.posts}>
    <div>
      <textarea name='' id='' cols='30' rows='10'></textarea>
      <button>Add Post</button>
      <button></button>
    </div>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  </div>
)

export default MyPosts
