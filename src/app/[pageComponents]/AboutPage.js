import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
        <div className='text-3xl md:text-5xl flex items-center flex-col' id='About'>
            <h1>About Me</h1>
            <span className='h-2 w-20 bg-[#00A3FF] rounded-2xl '/>
        </div>
        <div className=' md:text-lg flex items-center justify-center flex-col gap-10 text-center mt-10 '>
            <p id='About'>Hello! I'm Neeranjan, a skilled Full Stack Developer specializing in the MERN stack. With expertise in MongoDB, Express, React, and Node.js, I excel in crafting responsive and scalable web applications. I also integrate advanced libraries like GSAP and Three.js to create dynamic user experiences. Passionate about continuous learning, I stay updated with the latest technologies to deliver innovative solutions that drive results.</p>
            <Link href={"#Contact"} className='text-xl drop-shadow-2xl flex justify-center items-center text-black font-extrabold w-32 h-10 rounded-xl bg-gradient-radial from-[#28FFB2] to-[#39B581] ' id='About'>Contact Me</Link>
        </div>
    </div>
  )
}

export default AboutPage