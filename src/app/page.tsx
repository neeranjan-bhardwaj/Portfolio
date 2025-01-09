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
                scale:1.25,
                transition:{duration:0}
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
              href="#projects"
              whileHover={{
                color:'#2AECC5',
                scale:1.25,
                transition:{duration:0}
              }}
              initial={{
                x:1000,
              }}
              animate={{
                x:0
              }}
              transition={{
                duration:1.5
              }}
              onMouseEnter={()=>{control.start('hover')}}
              onMouseLeave={()=>{control.start('initial')}}
            >Projects</motion.a>
            <motion.a 
              href="#skills"
              whileHover={{
                color:'#2AECC5',
                scale:1.25,
                transition:{duration:0}
              }}
              initial={{
                x:1000,
              }}
              animate={{
                x:0
              }}
              transition={{
                duration:2
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
            delay:1.2
          }}
        >
          {["B","u","i","l","d","i","n","g"].map((e,i)=>{
            return(
              <motion.div 
                key={i} 
                whileHover={{
                  color:'#2AECC5',
                  scale:1.25,
                }}
                onMouseEnter={()=>{control.start('hover')}}
                onMouseLeave={()=>{control.start('initial')}}
                className='inline-block'
              >{e}</motion.div>
            )
          })}
          
          <span> </span>
          {["E","x","p","e","r","i","e","n","c","e","s"].map((e,i)=>{
            return(
              <motion.div 
                key={i} 
                whileHover={{
                  color:'#2AECC5',
                  scale:1.25,
                }}
                onMouseEnter={()=>{control.start('hover')}}
                onMouseLeave={()=>{control.start('initial')}}
                className='inline-block'
              >{e}</motion.div>
            )
          })}

          <span> </span>
          {["W","e","b"].map((e,i)=>{
            return(
              <motion.div 
                key={i} 
                whileHover={{
                  color:'#2AECC5',
                  scale:1.25,
                }}
                onMouseEnter={()=>{control.start('hover')}}
                onMouseLeave={()=>{control.start('initial')}}
                className='inline-block'
              >{e}</motion.div>
            )
          })}

          <span> </span>
          {["T","o","m","o","r","r","o","w","'","s"].map((e,i)=>{
            return(
              <motion.div 
                key={i} 
                whileHover={{
                  color:'#2AECC5',
                  scale:1.25,
                }}
                onMouseEnter={()=>{control.start('hover')}}
                onMouseLeave={()=>{control.start('initial')}}
                className='inline-block'
              >{e}</motion.div>
            )
          })}
          <br/>
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
              transition:{duration:0.1},
              boxShadow:'0 0 20px 5px #2AECC5'
            }}
            whileTap={{
              scale:0.9
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
              duration:0.5,
            }}
          >Start Project</motion.button>
          <motion.button 
            className=" border-2 border-[#2AECC5]  hover:bg-gradient-to-r hover:from-[#2AECC5] hover:to-[#F37F85] text-pink-400 hover:text-black font-bold px-6 py-2 rounded-3xl font-Cormorant"
            whileHover={{
              scale:1.15,
              transition:{duration:0.1},
              boxShadow:'0 0 20px 5px #2AECC5'
            }}
            whileTap={{
              scale:0.9
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
              duration:1,
            }}
          >Download CV</motion.button>
        </div>
      </section>

      {/* About Me Section */}
      

      {/* Projects Section */}
      <section id="projects" className="py-12 px-8 font-Cormorant">
        <motion.h2 
          className="text-center text-2xl md:text-4xl font-bold mb-8"
        >{["P","r","o","j","e","c","t","s"].map((e,i)=>{
          return(
            <motion.div 
              key={i} 
              whileHover={{
                color:'#2AECC5',
                scale:1.25,
              }}
              onMouseEnter={()=>{control.start('hover')}}
              onMouseLeave={()=>{control.start('initial')}}
              className='inline-block'
            >{e}</motion.div>
          )
        })}</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className=''
          >
            <motion.img
              className=''
            />
            <motion.h2
              className=''
            ></motion.h2>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-8 font-Cormorant">
        <motion.div
          whileInView={{
            y:0,
            opacity:1
          }}
          initial={{
            y:20,
            opacity:0
          }}
          transition={{
            duration:1,
            delay:0.5
          }}
        >
          <h2 
            className="w-full text-center text-2xl md:text-4xl font-bold mb-8 overflow-hidden"
          >
            {["C","o","r","e"].map((e,i)=>{
            return(
              <motion.div 
                key={i} 
                whileHover={{
                  color:'#2AECC5',
                  scale:1.25,
                }}
                onMouseEnter={()=>{control.start('hover')}}
                onMouseLeave={()=>{control.start('initial')}}
                className='inline-block'
              >{e}</motion.div>
            )
          })}
            <span> </span>
            {["C","o","m","p","e","t","e","n","c","i","e","s"].map((e,i)=>{
              return(
                <motion.div 
                  key={i} 
                  whileHover={{
                    color:'#2AECC5',
                    scale:1.25,
                  }}
                  onMouseEnter={()=>{control.start('hover')}}
                  onMouseLeave={()=>{control.start('initial')}}
                  className='inline-block'
                >{e}</motion.div>
              )
            })}
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {["Frontend Development", "React.js", "Next.js", "JavaScript", "TypeScript", "Backend Development", "Node.js", "Express.js", "MongoDB", "SQL"].map(skill => (
              <motion.span 
                key={skill} 
                className="bg-gray-800 text-white px-4 py-2 rounded"
                whileHover={{
                  scale: 1.25,
                  transition:{duration:0.2},
                  boxShadow:'0 0 20px 5px #2AECC5'
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onMouseEnter={()=>control.start('hover')}
                onMouseLeave={()=>control.start('initial')}
              >{skill}</motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileInView={{
            y:0,
            opacity:1
          }}
          initial={{
            y:20,
            opacity:0
          }}
          transition={{
            duration:1,
            delay:1
          }}
        >
          <h2 className="text-center text-2xl md:text-4xl font-bold mt-12 mb-8">
          {["T","e","c","h","n","i","c","a","l"].map((e,i)=>{
            return(
              <motion.div 
                key={i} 
                whileHover={{
                  color:'#2AECC5',
                  scale:1.25,
                }}
                onMouseEnter={()=>{control.start('hover')}}
                onMouseLeave={()=>{control.start('initial')}}
                className='inline-block'
              >{e}</motion.div>
            )
          })}
            <span> </span>
            {["E","x","p","e","r","t","i","s","e"].map((e,i)=>{
              return(
                <motion.div 
                  key={i} 
                  whileHover={{
                    color:'#2AECC5',
                    scale:1.25,
                  }}
                  onMouseEnter={()=>{control.start('hover')}}
                  onMouseLeave={()=>{control.start('initial')}}
                  className='inline-block'
                >{e}</motion.div>
              )
            })} 
            </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {["JavaScript", "TypeScript", "Python", "ShadCN UI", "GSAP", "JWT Authentication", "Secure API Development", "Payment Integration"].map(expertise => (
              <motion.span 
                key={expertise} 
                className="bg-gray-800 text-white px-4 py-2 rounded"
                whileHover={{
                  scale: 1.25,
                  transition:{duration:0.2},
                  boxShadow:'0 0 20px 5px #2AECC5'
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onMouseEnter={()=>control.start('hover')}
                onMouseLeave={()=>control.start('initial')}
              >{expertise}</motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          whileInView={{
            y:0,
            opacity:1
          }}
          initial={{
            y:20,
            opacity:0
          }}
          transition={{
            duration:1,
            delay:1
          }}
        >
          <h2 className="text-center text-2xl md:text-4xl font-bold mt-12 mb-8">
          {["S","o","f","t"].map((e,i)=>{
            return(
              <motion.div 
                key={i} 
                whileHover={{
                  color:'#2AECC5',
                  scale:1.25,
                }}
                onMouseEnter={()=>{control.start('hover')}}
                onMouseLeave={()=>{control.start('initial')}}
                className='inline-block'
              >{e}</motion.div>
            )
          })}
            <span> </span>
            {["S","k","i","l","l","s"].map((e,i)=>{
              return(
                <motion.div 
                  key={i} 
                  whileHover={{
                    color:'#2AECC5',
                    scale:1.25,
                  }}
                  onMouseEnter={()=>{control.start('hover')}}
                  onMouseLeave={()=>{control.start('initial')}}
                  className='inline-block'
                >{e}</motion.div>
              )
            })}
            </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {["Problem-Solving", "Attention to Detail", "Collaboration and Teamwork", "Adaptability and Resilience"].map(softSkill => (
              <motion.span 
                key={softSkill} 
                className="bg-gray-800 text-white px-4 py-2 rounded"
                whileHover={{
                  scale: 1.25,
                  transition:{duration:0.2},
                  boxShadow:'0 0 20px 5px #2AECC5'
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onMouseEnter={()=>control.start('hover')}
                onMouseLeave={()=>control.start('initial')}
              >{softSkill}</motion.span>
            ))}
          </div>
        </motion.div>
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