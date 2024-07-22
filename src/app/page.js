"use client"

import React from 'react'
import Link from 'next/link'
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
  return (
    <div className='relative text-white font-Playfair '>
      <div className=''>
          <div className='flex gap-16 justify-between text-xl mt-2'>
            <div className='ml-6' id='Name'>Neeranjan Bhardwaj</div>
            <div className='flex gap-10 justify-between '>
                <button id='Links'>Home</button>
                <button id='Links'>Work</button>
                <button id='Links'>Services</button>
            </div>
            <Link href={''} className='mr-6' id='Start'>Start Project</Link>
          </div>
          <HeroPage/>
          <AboutPage/>
          <ProjectPage/>
          <SkillPage/>
          <Contact/>
          <FooterPage/>
      </div>
    </div>
  )
}

export default page