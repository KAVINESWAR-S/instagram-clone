import React from 'react'
import logo from "./assets/insta-tet.png"; 
function Sidebar() {
  return (
    <div className='m-2 position-fixed'>
        <div className='d-flex flex-column gap-3'>
            <img className="logo-text" src={logo} alt="" />
            <div><i className="bi bi-house"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn"></i>Reels</div>
            <div><i className="bi bi-chat-dots"></i>Messages</div>
            <div><i className="bi bi-chat-left-heart"></i>Notifications</div>
            <div><i className="bi bi-bookmark-plus"></i>Create</div>
            <div><i className="bi bi-person-circle"></i>Profile</div>
        </div>

        <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>
    
  )
}

export default Sidebar