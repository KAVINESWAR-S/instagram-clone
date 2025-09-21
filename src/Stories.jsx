import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {
  const [Stories,setStories]=useState([]);

  const navigate=useNavigate()

  let tot=0;

  useEffect(()=>{
    fetch('http://localhost:3000/Story')
    .then(data=>data.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err.msg));
  },[])
  return (
    <div className='story d-flex'>
        <div className='d-none'>{tot=Stories.length}</div>
        {Stories.length > 0 ? (
          Stories.map((story)=>(
            <div key={story.id} className='mx-1'onClick={()=>{
              navigate(`/Story/${story.id}/${tot}`)
            }}>
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