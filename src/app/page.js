"use client"

import React,{useState} from 'react'
import HeroPage from './[pageComponents]/HeroPage'
import AboutPage from './[pageComponents]/AboutPage'
import ProjectPage from './[pageComponents]/ProjectPage'
import SkillPage from './[pageComponents]/SkillPage'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Contact from './[pageComponents]/contact'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Animatiom(){
    gsap.from("#Name",{
        opacity: 0,
        duration:1.5,
        y:-10
    })
    gsap.from("#Links",{
        opacity: 0,
        duration:1.5,
        y:-10,         
        stagger:1
    })
    gsap.from("#Start",{
        opacity: 0,
        duration:1.5,
        y:-10
    })
    const tm=gsap.timeline()
    tm.from("#Heding",{
        opacity: 0,
        stagger:0.5,
        x:10,
        duration:1.5
    })
    tm.from("#svg",{
        opacity: 0,
        scale:0,
        rotate:180,
        stagger:0.6,
        duration:1.5
    })
    gsap.from("#About",{
        scrollTrigger:{
            trigger:"#About",
            // markers:true,
            top:"top center"
        },
        opacity: 0,
        y:20,
        stagger:0.5,
        duration:1.5,
    })
    gsap.from("#Project",{
        scrollTrigger:{
            trigger:"#ProjectText",
            // markers:true,
            top:"center top "
        },
        scale:0,
        duration:1.5,
    })
    gsap.from("#ProjectText",{
        scrollTrigger:{
            trigger:"#ProjectText",
            top:"center top "
        },
        opacity: 0,
        x:10,
        stagger:0.5,
        duration:1.5,
    })
    gsap.from("#Skill",{
        scrollTrigger:{
            trigger:"#Skill",
            top:"top top",
            // markers:true
        },
        opacity: 0,
        y:90,
        stagger:0.5,
        duration:1
})
}

const page = () => {
  const animation=useGSAP(()=>{
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