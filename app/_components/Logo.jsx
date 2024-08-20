import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='flex items-center gap-2' > 
      <Image src={'/logo1.jpg'} alt='Logo' height={30} width={30} />
      <h2 className='font-bold text-xl' >Teams</h2>
    </div>
  )
}

export default Logo
