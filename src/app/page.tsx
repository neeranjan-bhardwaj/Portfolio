"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import {motion,useAnimationControls} from 'motion/react'

const page = () => {
  const [Type,setType]=useState<String>('')
  const [Index,setIndex]=useState<number>(0)
  const Mouse=useRef(null)
  const str:string="Modern Architecture";
  const [Top,setTop]=useState<number>()
  const [Left,setLeft]=useState<number>()
  const control=useAnimationControls()

  // for TypeWriter effect
  useEffect(()=>{
    if(Index<str.length){
    const TypeWrite=setTimeout(()=>{
      setType(Type+str[Index]);
      setIndex(Index+1);
    },100)
    return ()=>clearTimeout(TypeWrite)}
  },[Type])
  // mouse effect
  const Move=(e:React.MouseEvent<HTMLDivElement>)=>{
    setTimeout(() => {
      setTop(e.pageY-Mouse.current.offsetHeight/2)
      setLeft(e.pageX-Mouse.current.offsetWidth/2)
    },50);
  }

  return (
    <div className="bg-black text-white font-sans relative z-50" onMouseMove={Move}>
      {/* Header Section */}
      <header className="flex justify-center items-center px-8 py-4 sticky top-0 z-50">
        <motion.nav 
          className="flex gap-5 justify-center rounded-2xl overflow-hidden text-lg sticky top-2 font-Cormorant bg-[#d9d9d936] h-8 w-80"
          initial={{
            x: -50,
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
          transition={{
            duration: 0.5,
          }}
        >
            <motion.a 
              href="#"
              whileHover={{
                color:'#2AECC5',
                scale:1.25
              }}
              initial={{
                x:1000,
              }}
              animate={{
                x:0
              }}
              transition={{
                duration:0.5
              }}
              onMouseEnter={()=>{control.start('hover')}}
              onMouseLeave={()=>{control.start('initial')}}
            >Home</motion.a>
            <motion.a 
              href="#about"
              whileHover={{
                color:'#2AECC5',
                scale:1.25
              }}
              initial={{
                x:1000,
              }}
              animate={{
                x:0
              }}
              transition={{
                duration:0.5
              }}
              onMouseEnter={()=>{control.start('hover')}}
              onMouseLeave={()=>{control.start('initial')}}
            >About</motion.a>
            <motion.a 
              href="#projects"
              whileHover={{
                color:'#2AECC5',
                scale:1.25
              }}
              initial={{
                x:1000,
              }}
              animate={{
                x:0
              }}
              transition={{
                duration:0.5
              }}
              onMouseEnter={()=>{control.start('hover')}}
              onMouseLeave={()=>{control.start('initial')}}
            >Projects</motion.a>
            <motion.a 
              href="#skills"
              whileHover={{
                color:'#2AECC5',
                scale:1.25
              }}
              initial={{
                x:1000,
              }}
              animate={{
                x:0
              }}
              transition={{
                duration:0.5
              }}
              onMouseEnter={()=>{control.start('hover')}}
              onMouseLeave={()=>{control.start('initial')}}
            >Skills</motion.a>
            {/* <Link href="/Resume" className="hover:text-teal-400">Resume</Link> */}
        </motion.nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-8 z-50">
        <div className="flex justify-center mb-4 ">
          <div className='w-32 h-32 bg-teal-400 blur-3xl overflow-hidden rounded-full'></div>
          <div className="w-32 h-32 overflow-hidden absolute rounded-full" >
            <Image src="/Main.png" alt="" width={128} height={128} className=' object-contain absolute ' />
          </div>
        </div>
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight font-Cormorant"
          initial={{
            y:40,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:1.5,
          }}
        >
          {["B","u","i","l","d","i","n","g",' ',"T","o","m","o","r","r","o","w","'","s",' ',"W","e","b"," ","E","x","p","e","r","i","e","n","c","e","s"].map((e,i)=>{
            return(
              <motion.div 
                key={i} 
                whileHover={{
                  color:'#2AECC5',
                  scale:1.25
                }}
                onMouseEnter={()=>{control.start('hover')}}
                onMouseLeave={()=>{control.start('initial')}}
                className='inline-block'
              >{e}</motion.div>
            )
          })}<br/>
            {["w","i","t","h"," "].map((e,i)=>{
              return(
                <motion.div 
                  key={i} 
                  whileHover={{
                    color:'#2AECC5',
                    scale:1.25
                  }}
                  onMouseEnter={()=>{control.start('hover')}}
                  onMouseLeave={()=>{control.start('initial')}}
                  className='inline-block'
                >{e}</motion.div>
              )
            })}
          <div className=' inline-block bg-gradient-to-r from-[#2AECC5] to-[#F37F85] text-transparent bg-clip-text'>
            {Type}
          </div>
        </motion.h1>
        <div className="mt-6 space-x-4">
          <motion.button 
            className="bg-gradient-to-r from-[#2AECC5] to-[#F37F85] hover:bg-gradient-to-r hover:from-[#1CAC8F] hover:to-[#FC636B] text-black font-bold px-6 py-2 rounded-3xl font-Cormorant"
            whileHover={{
              scale:1.15,
              rotate:'5deg'
            }}
            initial={{
              scale:0,
              opacity:0
            }}
            animate={{
              scale:1,
              opacity:1
            }}
            transition={{
              duration:0.5
            }}
          >Start Project</motion.button>
          <motion.button 
            className=" border-2 border-[#2AECC5]  hover:bg-gradient-to-r hover:from-[#2AECC5] hover:to-[#F37F85] text-pink-400 hover:text-black font-bold px-6 py-2 rounded-3xl font-Cormorant"
            whileHover={{
              scale:1.15,
              rotate:'-5deg'
            }}
            initial={{
              scale:0,
              opacity:0
            }}
            animate={{
              scale:1,
              opacity:1
            }}
            transition={{
              duration:0.5
            }}
          >Download CV</motion.button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className=" flex gap-16 py-12 px-8">
        <div className='h-72 w-[40rem]'>
          <Image src="/About.png" alt="" width={340} height={100} className=' object-contain !ml-14 ' />
        </div>
        <div className='text-center'>
          <h2 id='i2' className="text-2xl md:text-4xl font-bold mb-4 font-Cormorant overflow-hidden">
            {["A","b","o","u","t ",'',"M","e"].map((e,i)=>{
              return(
                <motion.div
                  key={i}
                  whileHover={{
                    color:'#2AECC5',
                    scale:1.25
                  }}
                  onMouseEnter={()=>{control.start('hover')}}
                  onMouseLeave={()=>{control.start('initial')}}
                  className='inline-block'
                >{e}</motion.div>
              )
            })}
          </h2>
          <p id='i2' className="max-w-4xl text-lg mx-auto leading-relaxed font-Cormorant">
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
      <motion.span 
        ref={Mouse} 
        className={`w-7 h-7 rounded-full border-white border-2 absolute`} 
        style={{top:Top,left:Left,zIndex:-1}}
        variants={{
          hover:{
            backgroundColor:'#F37F85',
            boxShadow:'0 0 20px 5px #2AECC5',
            scale:1.55
          },
          initial:{
            backgroundColor:'transparent',
            boxShadow:'none',
            scale:1
          },
          button:{
            backgroundColor:'#F37F85',
            boxShadow:'0 0 20px 5px #2AECC5',
            scale:1.55,
            zIndex:20
          }
        }}
        animate={control}
      ></motion.span>
    </div>
  );
}

export default page