import React, { useEffect, useState } from 'react'

function Stories() {
  const [Stories,setStories]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/Story')
    .then(data=>data.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err.msg));
  },[])
  return (
    <div className='story d-flex'>
        {Stories.length > 0 ? (
          Stories.map((story)=>(
            <div key={story.id} className='mx-1'>
              <div className='gradient-border'>
                <img src={story.userImage} alt='user_profile' 
                className='story-dp rounded-circle'/>
              </div>
              <p className='text-truncate' style={{width:"50px",paddingBottom:"10px"}}>{story.username}</p>
            </div>
          ))
        ):
        (
          <p>Loading</p>
        )
      
      }
    </div>
  )
}

export default Stories