import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import c from './Profile.module.css'

const Profile = () => (
  <div>
    I'm Content
    <div>
      <img
        src='https://multiurok.ru/img/302295/image_592609a602d7e.jpg'
        alt=''
      />
    </div>
    <div>ava + descrip</div>
    <MyPosts/>
  </div>
)

export default Profile
