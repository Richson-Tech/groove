import Link from 'next/link'
import React from 'react'
import links from '@/data/data'

const Navbar = () => {
  return (
    <div className='text-lg flex justify-between h-20 bg-[#FAF5E7] text text-black'>
     <Link href="/" className='flex items-center p-4 text-lg font-bold'>
     Groove
     </Link>
     <div className='flex items-center gap-20'>
    {links.map((link) => 
    <Link key={link.id} href={link.url}>{link.title}</Link>
    )}
     </div>
    <Link href='/booknow' className='flex items-center p-4'>
    <button className="h-10 bg-[#9B804E] w-40 text-white hover:bg-slate-900">Book Now</button>
    </Link>


    </div>
  )
}

export default Navbar