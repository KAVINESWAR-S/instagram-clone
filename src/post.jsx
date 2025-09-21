import React, { useEffect, useState } from 'react'

function Post() {

  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    
    fetch('http://localhost:3000/posts')
    .then((res)=>res.json())
    .then((data=>setPosts(data)))
    .catch(err=>console.log(err))

  },[]);

    
  return (
    <div className="d-flex justify-content-center" style={{paddingTop:"20px"}}>
      {posts.length>0 ?(
          <div>
            {posts.map((post)=>(
              <div className="my-3"key={post.id}>
                <div className='d-flex'>
                  <img className="dp rounded-circle"src={post.userImage} alt="profilepic"/>
                  <h5>{post.username}</h5>
                </div>
                <img className='image' src={post.postImage} alt="postb"/>
                <div>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat-left"></i>
                  <i className="bi bi-send"></i>
                </div>
                <div>
                  <b>{post.likes}likes</b>
                </div>
                <p>{post.caption}</p>
              </div>
            ))}
          </div>
      ):(
        <div>
          Lodaing posts
        </div>  
      )} 
    </div>
  )
}

export default Post