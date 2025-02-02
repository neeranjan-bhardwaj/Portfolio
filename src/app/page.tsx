"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import {motion,useAnimationControls} from 'motion/react'

const page = () => {

  const Hover=(arr: string[]):ReactNode=>{
    return (arr.map((e,i)=>{
      return(
        <motion.div 
          key={i} 
          whileHover={{
            color:'#2AECC5',
            scale:1.25,
            textShadow:'0 0 20px #2AECC5',
          }}
          onMouseEnter={()=>{control.start('hover')}}
          onMouseLeave={()=>{control.start('initial')}}
          className='inline-block'
        >{e}</motion.div>
      )
    }))
  }

  const Projects=(Name:string[],Link:string,About:string,Img:string,Skill:string[],ComingSone:boolean)=>{
  const ProjectHover=useAnimationControls()
    return(
      <motion.a
          className='relative mt-4'
          onMouseEnter={()=>{ProjectHover.start('Hover')}}
          onMouseLeave={()=>{ProjectHover.start('initial')}}
          href={Link}
          whileHover={{
            scale:1.1
          }}
          whileTap={{
            scale: 0.9,
          }}
          initial={{
            opacity:0,
            scale:0
          }}
          viewport={{once:true}}
          whileInView={{
            opacity:1,
            scale:1,
            transition:{
              duration:1.5
            }
          }}
          >
            <motion.img
              className={`!w-[25rem] object-contain ${ComingSone && "blur-md"}`}
              src={Img}
              variants={{
                initial:{
                  boxShadow:'none'
                },
                Hover:{
                  boxShadow:'0 0 20px 5px #2AECC5'
                }
              }}
              initial='initial'
              animate={ProjectHover}
            />
            {ComingSone && 
              <div className="absolute top-0 flex items-center justify-center h-full w-full bg-transparent font-extrabold rounded-lg shadow-lg">
                <span className="absolute text-red-500 text-4xl font-extrabold uppercase tracking-wider animate-pulse">
                  Coming Soon
                </span>
              </div>}
            {ComingSone && <motion.div
              className='absolute bg-[#0000006c] text-white text-lg text-center font-bold justify-center gap-5 top-0 w-full'
              variants={{
                initial:{
                  zIndex:-1,
                  opacity:0,
                  x:-200
                },
                Hover:{
                  zIndex:1,
                  opacity:1,
                  x:0
                }
              }}
              initial='initial'
              animate={ProjectHover}
            >
              Coming Sone 
            </motion.div>}
            <motion.div
              className='absolute flex flex-wrap justify-center gap-5 top-10 w-full'
              variants={{
                initial:{
                  zIndex:-1,
                  opacity:0,
                  x:-200
                },
                Hover:{
                  zIndex:1,
                  opacity:1,
                  x:0
                }
              }}
              initial='initial'
              animate={ProjectHover}
            >
              {Skill.map((e,i)=>{
                return(
                  <motion.div
                    className="bg-gray-800 text-white px-4 py-2 rounded"
                    key={i}
                    whileHover={{
                      boxShadow:'0 0 20px 5px #F37F85'
                    }}
                  >{e}</motion.div>
                )
              })}
            </motion.div>
            <motion.h1
              className='text-4xl mt-5 font-semibold'
            >{Hover(Name)}</motion.h1>
            <motion.p
            className='w-80 mt-5 text-sm'
            >{About}</motion.p>
      </motion.a>
    )
  }
  
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
          {Hover(["B","u","i","l","d","i","n","g"])} {Hover(["T","o","m","o","r","r","o","w","'","s"])} {Hover(["W","e","b"])} {Hover(["E","x","p","e","r","i","e","n","c","e","s"])}
          <br/>
            {Hover(["w","i","t","h"," "]) }
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
          ><a href="/Contact"> Start Project </a></motion.button>
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
          initial={{
            opacity:0,
            y: 200
          }}
          viewport={{once:true}}
          whileInView={{
            opacity:1,
            y: 0,
            transition:{
              duration:1
            }
          }}
        >
          {Hover(["P","r","o","j","e","c","t","s"])}
        </motion.h2>
        <motion.h1 
            className='text-2xl mt-2 ml-5 md:text-4xl font-bold'
            initial={{
              opacity:0,
              y: 100
            }}
            viewport={{once:true}}
            whileInView={{
              opacity:1,
              y: 0,
              transition:{
                duration:1
              }
            }}
          >{Hover(["1","."])} {Hover(["W","e","b"])} {Hover(["P","r","o","j","e","c","t","s"])}</motion.h1>
        <div className="justify-items-center mt-10 grid md:grid-cols-2 gap-16">
          {Projects(["A","n","i","m","e","-","A","P","I"],'https://github.com/neeranjan-bhardwaj/AnimeQuote','A secure, custom-built REST API delivering curated anime quotes with character imagery and series information, developed using Node.js, Express, and MongoDB.','/API.png',["NodeJS","ExpressJS","MongoDB","TypeScript","Backend Development","Secure API Development"],false)}
          {Projects(["L","e","v","e","l","U","p","-","A","I"],'https://github.com/neeranjan-bhardwaj/Smart-AI','An intelligent roadmap generator powered by Google Gemini API, creating personalized learning paths for gaming, coding, and various skills through Next.js architecture.','/LevelUp.jpg',["Frontend Development","Backend Development","Next JS","React JS","JavaScript","ShadCN UI"],false)}
          {Projects(["S","m","a","r","t","-","T","e","x","t"],'https://github.com/neeranjan-bhardwaj/Smart-Text',"A sophisticated content creation platform leveraging Google Gemini API that enables writers to generate, enhance, and refine scripts with AI assistance, built on Next.js.","smart.jpg",["Frontend Development","Backend Development","Next JS","React JS","JavaScript","TypeScript","ShadCN UI"],false)}
          {Projects(["A","n","i","m","e","-","M","a","t","c","h","e","r"],'https://github.com/neeranjan-bhardwaj/Anime-Matcher',"","/Anime.jpg",["Frontend Development","Backend Development","Next JS","React JS","TypeScript","MySQL","Node.js","Express.js"],true)}
        </div>
        {/* Project Native */}
        <motion.h1 
            className='text-2xl mt-2 ml-5 md:text-4xl font-bold'
            initial={{
              opacity:0,
              y: 100
            }}
            viewport={{once:true}}
            whileInView={{
              opacity:1,
              y: 0,
              transition:{
                duration:1
              }
            }}
          >{Hover(["2","."])} {Hover(["N","a","t","i","v","e"])} {Hover(["P","r","o","j","e","c","t","s"])}</motion.h1>
        <div className="justify-items-center grid mt-10 md:grid-cols-2 gap-8">
          {Projects(["W","i","s","h","-","W","i","s","e"],'https://github.com/neeranjan-bhardwaj/WishWise','','/Wish.jpg',["NodeJS","ExpressJS","MySQL","TypeScript","Backend Development","React Native","Android","IOS","Expo"],true)}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-8 font-Cormorant">
        <motion.div
          viewport={{once:true}}
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
            {Hover(["C","o","r","e"])} {Hover(["C","o","m","p","e","t","e","n","c","i","e","s"])}
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {["Frontend Development", "Backend Development", "React.js", "Next.js", "JavaScript","TypeScript", "Node.js", "Express.js", "MongoDB", "SQL"].map(skill => (
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
          viewport={{once:true}}
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
            delay:1,
          }}
        >
          <h2 className="text-center text-2xl md:text-4xl font-bold mt-12 mb-8">
          {Hover(["T","e","c","h","n","i","c","a","l"])} {Hover(["E","x","p","e","r","t","i","s","e"])}
            </h2>
          <div className="flex flex-wrap justify-center gap-5">
            {["JavaScript", "TypeScript", "ShadCN UI", "GSAP", "JWT Authentication", "Secure API Development", "Payment Integration"].map(expertise => (
              <motion.span 
                key={expertise} 
                className="bg-gray-800 text-white px-4 py-2 rounded inline-block"
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
          viewport={{once:true}}
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
          {Hover(["S","o","f","t"])}
            <span> </span>
          {Hover(["S","k","i","l","l","s"])}
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
      <footer className="bg-gray-900 text-center py-4 flex justify-between overflow-hidden font-Cormorant">  
        <motion.h1 
          className='text-sm md:text-3xl ml-0 md:ml-5 '
          initial={{
            opacity:0,
            x:-100
          }}
          viewport={{once:true}}
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              duration:1.5
            }
          }}
        >{Hover(["N","e","e","r","a","n","j","a","n"])} {Hover(["B","h","a","r","d","w","a","j"])}</motion.h1>
        <motion.div 
          className='flex gap-5 justify-center items-center mr-0 md:mr-5 overflow-hidden'
          initial={{
            opacity:0,
            x:100
          }}
          viewport={{once:true}}
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              duration:1.5,
              delay:1
            }
          }}
        >
          <a href="https://github.com/neeranjan-bhardwaj"><Image src={'/GitHub.png'} width={70} height={70} alt="GitHub" className="mr-2" /></a>
          <a href="https://linkedin.com/in/neeranjan-bhardwaj-06621b27a"><Image src={'/Linkedin.png'} width={70} height={70} alt="Linkedin" className="mr-2" /></a>
          <a href="https://leetcode.com/u/Neeranjan_Bhardwaj/"><Image src={'/LeetCode.png'} width={100} height={100} alt="LeetCode" className="mr-2" /></a>
        </motion.div>
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