import React from 'react'
import Data from '../ProjectData.json'
import Link from 'next/link'

const ProjectPage = () => {
  return (
    <div className='mt-16'>
        <div className='text-5xl flex items-center flex-col' id="Project">
            <h1>Projects</h1>
            <span className='h-2 w-20 bg-[#00A3FF] rounded-2xl mt-2 '/>
        </div>
        <div>
            {Data.map((da)=>{
                return(
                    <div className='flex items-center max-md:flex-col justify-around gap-10 mt-12 '>
                        <img src={da.img} className=' w-3/4 md:w-1/4 h-3/4 md:h-1/6' id='ProjectText'/>
                        <div className=' grid justify-center w-full md:w-3/6 gap-4 md:gap-10 '>
                            <h1 className='text-2xl max-md:text-center ' id='ProjectText'>{da.Name}</h1>
                            <p className='md:text-lg' id='ProjectText'>{da.Description}</p>
                            <Link href={`/${da.id}`} className=' text-lg flex justify-center items-center text-black font-extrabold w-32 h-10 rounded-xl bg-gradient-radial from-[#28FFB2] to-[#39B581] ' id='ProjectText'>Case Study</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProjectPage