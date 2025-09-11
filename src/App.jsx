import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggest from './Suggest'

function App() {
  return (
    <div className="d-flex vh-100 ">
      <div className='w-20'><Sidebar/></div>
      <div className='w-50 bg-secondary'><Feed/></div>
      <div className='w-30'><Suggest/></div>
    </div>
  )
}
export default App