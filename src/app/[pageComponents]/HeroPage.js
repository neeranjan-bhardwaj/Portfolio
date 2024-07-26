import Link from 'next/link'
import React from 'react'

const HeroPage = () => {
  return (
    <div className=' flex justify-center items-center gap-5 md:gap-10 flex-col h-96 md:h-screen w-full relative overflow-hidden '>
      <span className='h-52 w-36 bg-[#02FFF2] max-md:hidden rounded-full absolute top-0 md:left-[-8%] blur-3xl '/>
      <span className='h-52 w-36 bg-[#02FFF2] max-md:hidden rounded-full absolute top-0 left-[98%] blur-3xl '/>
      <span className='h-52 w-36 bg-[#02FF91] max-md:hidden rounded-full absolute top-96 left-[-8%] blur-3xl '/>
      <span className='h-52 w-36 bg-[#02FF91] max-md:hidden rounded-full absolute top-96 left-[98%] blur-3xl '/>
      <img src='/CSS.svg' className='max-md:hidden absolute h-20 left-52 top-72' id='svg'/>
      <img src='/HTML.svg' className='max-md:hidden absolute h-20 left-14 bottom-20' id='svg'/>
      <img src='/React.svg' className='max-md:hidden absolute h-20  left-80 bottom-28' id='svg'/>
      <img src='/Next.svg' className='max-md:hidden absolute h-20 right-36 bottom-48' id='svg'/>
      <img src='/JS.svg' className='max-md:hidden absolute h-20 right-56 top-56' id='svg'/>
      <img src='/Tailwind.svg' className='max-md:hidden absolute h-20 right-96 bottom-16' id='svg'/>
        <div className='text-3xl md:text-7xl' id='Heding'>
            <h1 className='bg-gradient-to-t from-[#00F0FF] to-[#00FF66] h-10 md:h-28 text-transparent bg-clip-text font-extrabold md:font-semibold'>Crafting High-Performance</h1>
            <h1 className='text-center bg-gradient-to-t from-[#00F0FF] to-[#00FF66] text-transparent bg-clip-text h-10 md:h-28 font-extrabold md:font-semibold'>Web Applications</h1>
        </div>
        <div className=' md:text-lg text-center md:w-8/12 text-[#C9C9C9] ' id='Heding'>
            <p>Mastering the web stack with HTML, CSS, and JavaScript, specializing in React.js and Next.js for dynamic, responsive interfaces. Backend expertise in Node.js and Express, with MongoDB for robust data management. Crafting seamless digital experiences with a passion for clean, efficient code.</p>
        </div>
        <Link href={"/contact"} className='text-xl drop-shadow-2xl flex justify-center items-center text-black font-extrabold w-32 h-10 rounded-xl bg-gradient-radial from-[#28FFB2] to-[#39B581] ' id='Heding'>Contact Me</Link>
    </div>
  )
}

export default HeroPage