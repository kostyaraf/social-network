import React from 'react'
import c from './Post.module.css'

const Post = () => (
  <div className={c.item}>
    <img
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmb5hZGHkVAMbo_VWT55rGCM0E3yBHrDnVlQ&usqp=CAU'
      alt='profile photo'
    />
    post 1<span>Like</span>
  </div>
)

export default Post
