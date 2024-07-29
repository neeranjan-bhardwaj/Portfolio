import React from 'react'

const FooterPage = () => {
  return (
    <div className='w-full bg-[#343434] mt-10 flex items-center '>
        <div className='w-64 md:w-96 h-11 ml-5 md:ml-10 border-r-2 border-solid border-white md:text-3xl '>Neeranjan Bhardwaj</div>
        <div className='flex items-start flex-col ml-4 md:ml-10 text-sm '>
          <button>NeeranjanBhardwaj@gmail.com</button>
          <button>7467075985</button>
          <a href='https://github.com/neeranjan-bhardwaj'>Git Hub</a>
        </div>
    </div>
  )
}

export default FooterPage