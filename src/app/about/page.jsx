import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='h-max'>
      <div className=''>
    <Image className='h-52' src="https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    width={1920}
    height={500}
    />
      </div>
    </div>
  )
}

export default About