import React from 'react'
import { Mail } from '../mail'


export default function Contact(){
  return (
    <div className='w-full h-[35rem] mt-16 flex justify-center ' id='Contact'>
        <form onSubmit={(event)=>{
          event.preventDefault()
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData);
          const name=data.name
          const mail=data.email
          const message=data.message
          const send=async()=>{
            await Mail({to:process.env.MAIL,name:name,subject:`Mail From ${name}`,
              body:`<h1>This is mail is from ${name} </br>There mail is ${mail} </h1> <h2> ${message}</h2>`
            })
          }
          try{
            send()
            alert("Message send Successful")
          }catch{
            alert("Message send faill")
          }
        }} className='h-full w-full md:w-2/4 text-center flex flex-col justify-center gap-10'>
            <h1 className='text-3xl md:text-5xl '>Get in Touch</h1>
            <input type="text" placeholder='Your Name' name='name' className='w-full h-10 rounded-md bg-[#D9D9D9] ' />
            <input type="email" placeholder='Your Email' name='email' className='w-full h-10 rounded-md bg-[#D9D9D9] ' />
            <textarea type="text" name='message' className='w-full h-52 rounded-md bg-[#D9D9D9] ' />
            <button className=' text-lg flex justify-center items-center text-black font-extrabold w-32 h-10 rounded-xl bg-gradient-radial from-[#28FFB2] to-[#39B581] '>Send</button>
        </form>
    </div>
  )
}
