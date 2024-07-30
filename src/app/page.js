"use client"

import React,{useState} from 'react'
import HeroPage from './[pageComponents]/HeroPage'
import AboutPage from './[pageComponents]/AboutPage'
import ProjectPage from './[pageComponents]/ProjectPage'
import SkillPage from './[pageComponents]/SkillPage'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Animatiom } from './Animation'
import Contact from './[pageComponents]/contact'

const page = () => {
  useGSAP(()=>{
    Animatiom()
  })
  return (
    <div className='text-white font-Playfair'>    
      <HeroPage/>
      <AboutPage/>
      <ProjectPage/>
      <SkillPage/>
      <Contact/>
    </div>
  )
}

export default page