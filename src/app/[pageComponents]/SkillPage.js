import React from 'react'

const SkillPage = () => {
  return (
    <div>
        <div className='text-5xl flex items-center flex-col mt-10' id='Skill'>
            <h1>Services</h1>
            <span className='h-2 w-20 bg-[#00A3FF] rounded-2xl mt-2 '/>
        </div>
        <div className='grid gap-2 grid-rows-4 md:grid-rows-2 grid-cols-2 md:grid-cols-5 content-around mt-16'>
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-24 h-9 text-2xl text-center' id='Skill'>HTML</div>
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-16 h-9 text-2xl text-center' id='Skill'>CSS</div>
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-40 h-9 text-2xl text-center' id='Skill'>JAVASCRIPT</div>
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-36 h-9 text-2xl text-center' id='Skill'>REACT.JS</div>
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-36 h-9 text-2xl text-center' id='Skill'>NODE.JS</div>          
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-36 h-9 text-2xl text-center' id='Skill'>EXPRESS</div>
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-28 h-9 text-2xl text-center' id='Skill'>NEXT.JS</div>
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-20 h-9 text-2xl text-center' id='Skill'>GSAP</div>
            {/* <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-72 h-9 text-2xl text-center' id='Skill'>RESPONSIVE DESIGN</div> */}
            <div className='bg-[#ffffff7b] rounded-md drop-shadow-lg font-semibold w-36 h-9 text-2xl text-center md:ml-10' id='Skill'>TAILWIND</div>
        </div>
    </div>
  )
}

export default SkillPage