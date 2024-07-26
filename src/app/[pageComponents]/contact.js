import React from 'react'
import { Mail } from '../mail'

const send=async()=>{
  await Mail({to:"neeranjanbhardwaj@gmail.com",name:"knaruto",subject:"test mail",
    body:"<h1>this is a test hello world</h1>"
  })
}

export default function Contact(){
  return (
    <div className='w-full h-[35rem] mt-16 flex justify-center '>
        <div className='h-full w-full md:w-2/4 text-center flex flex-col justify-center gap-10'>
            <h1 className='text-3xl md:text-5xl '>Get in Touch</h1>
            <input type="text" placeholder='Your Name' className='w-full h-10 rounded-md bg-[#D9D9D9] ' />
            <input type="email" placeholder='Your Email' className='w-full h-10 rounded-md bg-[#D9D9D9] ' />
            <input type="text" className='w-full h-52 rounded-md bg-[#D9D9D9] ' />
            <button onClick={send()} className=' text-lg flex justify-center items-center text-black font-extrabold w-32 h-10 rounded-xl bg-gradient-radial from-[#28FFB2] to-[#39B581] '>Send</button>
        </div>
    </div>
  )
}
