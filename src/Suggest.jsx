import React, { useEffect, useState } from 'react'

function suggestions() {

const [profile,setProfile] =useState(null);

const[suggestions,setSuggestions]= useState([]);

useEffect(()=>{
  fetch('http://localhost:3000/profile')
  .then(data=>data.json())
  .then(data=>setProfile(data))
  .catch(err=>console.log(err));

  fetch('http://localhost:3000/suggestions')
  .then(data=>data.json())
  .then(data=>setSuggestions(data))
  .catch(err=>console.log(err));

},[]);


  return (
    <div>
      <div className='suggestions w-75 m-5'>
        {profile?
          <div className='d-flex'>
            <img className="dp rounded-circle"src={profile.userImage} alt="profilepic"/>
            <h5>{profile.username}</h5>
            <small className='ms-auto text-primary'>Switch</small>
          </div>
          :
          <div>
            <p>Loding</p>
          </div>
        }
        <div className='d-flex'>
          <b>Suggsted for you</b>
          <p className='ms-auto'>See all</p>
        </div>

        <div>
          {suggestions.length>0 ?(
            <div>
              {suggestions.map((suggestion)=>(
                <div key={suggestion.id}>
                  <div className='d-flex'>
                    <img className="dp rounded-circle"src={suggestion.userImage} alt="profilepic"/>
                    <h5>{suggestion.username}</h5>
                    <p className='text-primary ms-auto'>Follow</p>
                  </div>

                </div>
              ))}
            </div>
            ):(
            <div>
              Lodaing
            </div>  
          )} 
        </div>
      </div>
      
    </div>
  )
}

export default suggestions




                  
                