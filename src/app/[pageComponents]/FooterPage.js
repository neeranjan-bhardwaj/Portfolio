import Link from 'next/link'
import React from 'react'

const FooterPage = () => {
  return (
    <div className='w-full h-16 bg-[#343434] mt-10 flex items-center '>
        <div className='w-96 h-11 ml-10 border-r-2 border-solid border-white flex items-center justify-center text-3xl '>Neeranjan Bhardwaj</div>
        <div className='flex items-center justify-center '></div>
        <Link href={""} className=' '> Start Project</Link>
    </div>
  )
}

export default FooterPage