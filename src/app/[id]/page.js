import React from 'react'
import Data from '../ProjectData.json'
import Link from 'next/link'

const page = ({params}) => {
  return (
    <div className='text-white grid place-items-center gap-5 '>
        {
            Data.map(e=>{
                if(e.id==params.id){
                    return(
                        <>
                        <h1 className='text-3xl w-full text-center mt-5 '>{e.Name}</h1>
                        <div className='w-full grid place-items-center '><img src={e.img}/></div>
                        <div className='ml-3 mr-3'>
                            <h1 className='text-2xl '>Description:</h1>
                            <p className='md:text-lg '>{e.Description}</p>
                            <h1 className='mt-10 text-2xl'>Features:</h1>
                            <ul className='list-disc'>
                                {e.Features.map(f=>{
                                    return <li className='md:text-lg ml-10'>{f}</li>
                                })}
                            </ul>
                            <h1 className='text-2xl'>Technologies Used</h1>
                            <ul className='list-disc'>
                                {e.Technologies.map(tu=>{
                                    return <li className='md:text-lg ml-10'>{tu}</li>
                                })}
                            </ul>
                        </div>
                        <Link href={e.Link} className=' text-lg flex justify-center items-center text-black font-extrabold w-32 h-10 rounded-xl bg-gradient-radial from-[#28FFB2] to-[#39B581] '>Project</Link>
                        </>
                        
                    )
                }
            })
        }
    </div>
  )
}

export default page