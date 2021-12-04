// Libraries
import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
// Utilities
import { baseUrl } from '../../utils/backendUrl';
import PostWithoutImage from './PostWithoutImg';
import Post from './Post';

const ShowPosts = (props) => {
  const[posts, setPosts] = useState('');
  useEffect(() => {
    fetch(`${baseUrl}/api/post/allposts`, {
      headers: {"Authorization": props.token}
    })
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(err => console.log(err))
  },[props.token]);

  if(!posts) {
    return(
      <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
        <Loader
          visible
          style={{ margin: 'auto' }}
          type="MutatingDots"
          secondaryColor="#d31c3e"
          color="#D31C3E"
          height={100}
          width={100}
        />
      </div>
    )
  }

  console.log(posts);

  return(
    <div>

      {posts.map(item => {
        return(
          item.postImageUrl ? 
          <Post
            key={item._id}
            postId={item._id}
            userName={item.user.userName}
            postText={item.postText}
            postImg={item.postImageUrl}
          /> :
          <PostWithoutImage
            key={item._id}
            postId={item._id}
            userName={item.user.userName}
            postText={item.postText}
          />
        )
      })}
    
    {/*
    
      <Post 
          postId='1' 
          userName='Azeem Subhani' 
          postText='This is a Random Dummy post created by Azeem Subhani!' 
          postImg='' />
        <PostWithoutImage
          postId='1' 
          userName='Azeem Subhani' 
          postText='This is a Random Dummy post created by Azeem Subhani!' 
        />

    */}

    </div>
  )
}

export default ShowPosts;