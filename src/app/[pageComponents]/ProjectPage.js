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
                    <div className='flex items-center justify-around gap-10 mt-6 '>
                        <img src={da.Image} className='w-1/4 h-1/6' id='ProjectText'/>
                        <div className=' grid justify-center w-3/6 gap-10 '>
                            <h1 className='text-2xl' id='ProjectText'>{da.Name}</h1>
                            <p className='text-lg' id='ProjectText'>{da.About}</p>
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