"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
  const [Type,setType]=useState<String>('')
  const [Index,setIndex]=useState<number>(0)
  const str:string="Modern Architecture";

  useEffect(()=>{
    if(Index<str.length){
    const TypeWrite=setTimeout(()=>{
      setType(Type+str[Index]);
      setIndex(Index+1);
    },100)
    return ()=>clearTimeout(TypeWrite)}
  },[Type])

  return (
    <div className="bg-black text-white font-sans">
      {/* Header Section */}
      <header className="flex justify-center items-center px-8 py-4 sticky top-0 z-50">
        <nav className="flex gap-5 justify-center rounded-2xl text-lg sticky top-2 font-Cormorant bg-[#d9d9d936] h-8 w-80">
          <Link href="#" className="hover:text-teal-400 ">Home</Link>
          <Link href="#about" className="hover:text-teal-400">About</Link>
          <Link href="#projects" className="hover:text-teal-400">Projects</Link>
          <Link href="#skills" className="hover:text-teal-400">Skills</Link>
          {/* <Link href="/Resume" className="hover:text-teal-400">Resume</Link> */}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-8">
        <div className="flex justify-center mb-4 ">
          <div className='w-32 h-32 bg-teal-400 blur-3xl overflow-hidden rounded-full'></div>
          <div className="w-32 h-32 overflow-hidden absolute rounded-full" >
            <Image src="/Main.png" alt="" width={128} height={128} className=' object-contain absolute ' />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight font-Cormorant">
          Building Tomorrow's <span className="bg-gradient-to-r from-[#2AECC5] to-[#F37F85] text-transparent bg-clip-text font-Cormorant">Web Experiences</span>
          <br /> with <span className="bg-gradient-to-r from-[#2AECC5] to-[#F37F85] text-transparent bg-clip-text font-Cormorant">{Type} |</span>
        </h1>
        <div className="mt-6 space-x-4">
          <button className="bg-gradient-to-r from-[#2AECC5] to-[#F37F85] hover:bg-gradient-to-r hover:from-[#1CAC8F] hover:to-[#FC636B] text-black font-bold px-6 py-2 rounded-3xl font-Cormorant">Start Project</button>
          <button className=" border-2 border-[#2AECC5]  hover:bg-gradient-to-r hover:from-[#2AECC5] hover:to-[#F37F85] text-pink-400 hover:text-black font-bold px-6 py-2 rounded-3xl font-Cormorant">Download CV</button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className=" flex gap-16 py-12 px-8">
        <div className='h-72 w-[40rem]'>
          <Image src="/About.png" alt="" width={340} height={100} className=' object-contain !ml-14 ' />
        </div>
        <div className='text-center'>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-Cormorant">About Me</h2>
          <p className="max-w-4xl text-lg mx-auto leading-relaxed font-Cormorant">
            Hi, I'm Neeranjan Bhardwaj | Full-Stack Developer transforming complex technical challenges into elegant, user-centric solutions. With expertise in MERN stack development and responsive design, I specialize in creating scalable applications that drive meaningful user engagement.<br/>
            <span className="bg-gradient-to-r from-[#0D8E26] to-[#2AECC5] text-transparent bg-clip-text font-extrabold text-2xl">Let's collaborate to turn your vision into reality.</span>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-8 font-Cormorant">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="border border-gray-700 p-4 rounded-md">
              <h3 className="text-xl font-bold mb-2">Title:</h3>
              <p>About project tell here</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-8 font-Cormorant">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">Core Competencies</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {["Frontend Development", "React.js", "Next.js", "JavaScript", "TypeScript", "Backend Development", "Node.js", "Express.js", "MongoDB", "SQL"].map(skill => (
            <span key={skill} className="bg-gray-800 text-white px-4 py-2 rounded">{skill}</span>
          ))}
        </div>

        <h2 className="text-center text-2xl md:text-4xl font-bold mt-12 mb-8">Technical Expertise</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {["JavaScript", "TypeScript", "Python", "ShadCN UI", "GSAP", "JWT Authentication", "Secure API Development", "Payment Integration"].map(expertise => (
            <span key={expertise} className="bg-gray-800 text-white px-4 py-2 rounded">{expertise}</span>
          ))}
        </div>

        <h2 className="text-center text-2xl md:text-4xl font-bold mt-12 mb-8">Soft Skills</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {["Problem-Solving", "Attention to Detail", "Collaboration and Teamwork", "Adaptability and Resilience"].map(softSkill => (
            <span key={softSkill} className="bg-gray-800 text-white px-4 py-2 rounded">{softSkill}</span>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-center py-4 font-Cormorant">
        <p className="text-gray-400">© 2025 Neeranjan Bhardwaj</p>
      </footer>
    </div>
  );
}

export default page