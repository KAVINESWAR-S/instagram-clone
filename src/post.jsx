import React, { useEffect, useState } from 'react'

function Post() {

  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    
    fetch('http://localhost:5000/posts')
    .then((res)=>res.json())
    .then((data=>setPosts(data)))
    .catch(err=>console.log(err))

  },[]);

    
  return (
    <div>
      {posts.length>0 ?(
          <div>
            {posts.map((post)=>(
              <div key={post.id}>
                <div className='d-flex'>
                  <img className="dp rounded-circle"src={post.userImage} alt="profilepic"/>
                  <h5>{post.username}</h5>
                </div>
                <img className='' src={post.postImage} alt="post"/>
              </div>
            ))}
          </div>
      ):
        <div>
          Lodaing posts
        </div>  
} 
      </div>
  )
}

export default Post