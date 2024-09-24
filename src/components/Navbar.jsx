import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="w-full bg-orange-400  p-2">
        <div className="ml-4 flex justify-between items-center">
             <h1 className="text-3xl text-white">Portfolio</h1>
             <div className="flex gap-5 items-center mr-4">
                <Link to={"/"} className='text-lg text-white hover:border-b-2 '>Home</Link>
                <Link to="/about" className='text-lg text-white hover:border-b-2'>About</Link>
                <Link to={"/skills"} className='text-lg text-white hover:border-b-2'>Skills</Link>
                <Link to={"/projects"} className='text-lg text-white hover:border-b-2'>Projects</Link>
                <Link to={"/contact"} className='text-lg text-white hover:border-b-2'>Contact</Link>
             </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
