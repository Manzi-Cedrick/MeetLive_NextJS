import React from 'react'

function Headers(){
  return (
    <header className="flex bg-violet-500 justify-between text-white place-items-center w-screen h-[8vh] p-5">
      <div className="logo w-12 h-12 rounded-full bg-green-500"> 
      </div>
      <ul className="links  flex  gap-2 text-[14px]">
        <li>Recent Meetings</li>
        <li>Added Favourites</li>
      </ul>
    </header>
  )
}
export default Headers;