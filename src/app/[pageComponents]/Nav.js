"use client"

import React,{useState} from 'react'


const Nav = () => {
    const [nav,setnav]=useState(false)
  return (
    <nav className='text-white flex justify-center gap-44 md:gap-2 md:text-xl '>
    <div className='md:hidden' id='Name'>Neeranjan Bhardwaj</div>
    <div className='max-md:hidden bg-[#ffffff58] w-[35%] h-8 flex justify-center gap-5 mt-5 rounded-3xl fixed top-0 z-50 ' id='Links'>
      <a href='#' className='hover:text-gray-300'>Home</a>
      <a href='#About' className=''>About</a>
      <a href='#Project' className=''>Projects</a>
      <a href='#Skill' className=''>Skills</a>
        <a href='#Contact' id='Start'>Contact Me</a>
    </div>
    <div className='md:hidden ml-2 md: '>
      <button onClick={()=>setnav(!nav)} className='md:hidden'>
        <svg fill='none' 
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        viewBox='0 0 24 24'
        className='w-6 h-6'>
          <path d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </button>
      {nav?
      <div className={` text-lg md: w-full md:w-3/4 bg-[#201F1F] md: z-50 md: left-0 absolute md: flex flex-col md:flex-row justify-center items-center md: gap-10`}>
      <a href='#' className='hover:text-gray-300'>Home</a>
      <a href='#About' className=''>About</a>
      <a href='#Project' className=''>Projects</a>
      <a href='#Skill' className=''>Skills</a>
      <a href='#Contact' className=''>Contact Me</a>
    </div>:null
      }
    </div>
  </nav>
  )
}

export default Nav