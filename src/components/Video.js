import React from 'react'
import Image from 'next/image'
import Hinh1 from '../img/Hinh1.jpg'

function Video() {
  return (
    <div className ='bg-[#181818] w-[280px] h-64 flex flex-col'>
    <Image src={Hinh1}  />
    <div className= 'flex justify-around mt-2'>
          <img
          src=""
          alt=""
          className='rounded-full w-[11%] h-8'
          />
      <div className='w-[80%] text-sm font-bold'>
    <h3 className= 'text-sm text-white'>
         Hhhhhhhhhhhhhhhhhh
    </h3>
    <h3 className='text-[12px] text-gray-400'>HHH</h3>
    <h3 className='text-[12px] text-gray-400'>100k views--11 hours</h3>
    </div>
    </div>
    </div>
  )
}

export default Video
