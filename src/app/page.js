"use client"

import React,{useState} from 'react'
import HeroPage from './[pageComponents]/HeroPage'
import AboutPage from './[pageComponents]/AboutPage'
import ProjectPage from './[pageComponents]/ProjectPage'
import SkillPage from './[pageComponents]/SkillPage'
import FooterPage from './[pageComponents]/FooterPage'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Animatiom } from './Animation'
import Contact from './[pageComponents]/contact'

const page = () => {
  useGSAP(()=>{
    Animatiom()
  })
  const [nav,setnav]=useState(false)
  console.log(nav)
  return (
    <div className='text-white font-Playfair '>    
      <nav className='flex justify-center md:gap-2 md:text-xl '>
        <div id='Name'>Neeranjan Bhardwaj</div>
        <div className={`w-2/3 max-md:hidden flex justify-center gap-10`} id='Links'>
          <a href='#' className='hover:text-gray-300'>Home</a>
          <a href='#' className=''>Work</a>
          <a href='#' className=''>Services</a>
        </div>
        <a href='#' className='ml-28' id='Start'>Start Project</a>
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
          <div className={`w-full md:w-3/4 bg-slate-400 md: z-50 md: left-0 absolute md: flex flex-col md:flex-row justify-center items-center md: gap-10`}>
          <a href='#' className='hover:text-gray-300'>Home</a>
          <a href='#' className=''>Work</a>
          <a href='#' className=''>Services</a>
        </div>:null
          }
        </div>
      </nav>
      <HeroPage/>
      <AboutPage/>
      <ProjectPage/>
      <SkillPage/>
      <Contact/>
      <FooterPage/>
    </div>
  )
}

export default page