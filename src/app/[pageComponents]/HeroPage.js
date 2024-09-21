"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const HeroPage = () => {
  const ref1=useRef(null)
  const ref2=useRef(null)
  useEffect(()=>{
    const handleContact=()=>{gsap.to(ref1.current,{
        scale:1.2,
        background:"#00F0FF",
        ease:"power2.out",
        duration:1.5
      })}
      const handleOutContact=()=>{gsap.to(ref1.current,{
        scale:1,
        background:"#00FF66",
        ease:"power2.out",
        duration:1.5
      })}
      const handleCV=()=>{
        gsap.to(ref2.current,{
          scale:1.2,
          borderColor:"#00F0FF",
          ease:"power2.out",
          duration:1.5
        })
      }
      
      const handleOutCV=()=>{
        gsap.to(ref2.current,{
          scale:1,
          borderColor:"#00FFA1",
          ease:"power2.out",
          duration:1.5
        })
      }
    ref2.current.addEventListener("mouseenter",handleCV)
    ref2.current.addEventListener("mouseleave",handleOutCV)
    ref1.current.addEventListener("mouseenter",handleContact)
    ref1.current.addEventListener("mouseleave", handleOutContact);
    return()=>{
      ref2.current.removeEventListener("mouseenter",handleCV)
      ref2.current.removeEventListener("mouseleave",handleOutCV)
      ref1.current.removeEventListener("mouseleave", handleOutContact);
      ref1.current.removeEventListener("mouseenter", handleContact);
    }
  },[])

  return (
      <div className=' flex justify-center items-center gap-5 md:gap-10 flex-col h-96 md:h-screen md:w-full relative overflow-hidden '>
        <span className='h-52 w-36 bg-[#00F0FF] max-md:hidden rounded-full absolute top-0 md:left-[-8%] blur-3xl '/>
        <span className='h-52 w-36 bg-[#00F0FF] max-md:hidden rounded-full absolute top-0 left-[98%] blur-3xl '/>
        <span className='h-52 w-36 bg-[#0DFF00] max-md:hidden rounded-full absolute top-96 left-[-8%] blur-3xl '/>
        <span className='h-52 w-36 bg-[#0DFF00] max-md:hidden rounded-full absolute top-96 left-[98%] blur-3xl '/>
        <img src='/CSS.svg' className='max-md:hidden absolute h-20 left-52 top-72' id='svg'/>
        <img src='/HTML.svg' className='max-md:hidden absolute h-20 left-14 bottom-20' id='svg'/>
        <img src='/React.svg' className='max-md:hidden absolute h-20  left-80 bottom-10' id='svg'/>
        <img src='/next.svg' className='max-md:hidden absolute h-20 right-36 bottom-48' id='svg'/>
        <img src='/JS.svg' className='max-md:hidden absolute h-20 right-56 top-56' id='svg'/>
        <img src='/Tailwind.svg' className='max-md:hidden absolute h-20 right-96 bottom-16' id='svg'/>
          <div className='text-2xl md:text-7xl' id='Heding'>
              <h1 className='bg-gradient-to-b from-[#00F0FF] to-[#00FF66] h-10 md:h-28 text-transparent bg-clip-text font-extrabold md:font-semibold'>Crafting High-Performance</h1>
              <h1 className='text-center bg-gradient-to-t from-[#00F0FF] to-[#00FF66] text-transparent bg-clip-text h-10 md:h-28 font-extrabold md:font-semibold'>Web Applications</h1>
          </div>
          <div className=' md:text-lg text-center md:w-8/12 text-[#C9C9C9] ' id='Heding'>
              <p>Mastering the web stack with HTML, CSS, and JavaScript, specializing in React.js and Next.js for dynamic, responsive interfaces. Backend expertise in Node.js and Express, with MongoDB for robust data management. Crafting seamless digital experiences with a passion for clean, efficient code.</p>
          </div>
          <div className='flex gap-16'>
            <Link href={"#Contact"} className='text-xl drop-shadow-2xl flex justify-center items-center text-black font-extrabold w-32 h-10 rounded-xl bg-[#00FF66] ' ref={ref1} id='Heding'>Contact Me</Link>
            <Link href={"/resume2.pdf"} className='text-xl drop-shadow-2xl flex justify-center items-center text-white font-extrabold w-40 h-10 rounded-xl border-2 border-[#00FFA1] ' ref={ref2} id='Heding' download={"resume2.pdf"}>Download CV</Link>
          </div>
      </div>
  )
}

export default HeroPage