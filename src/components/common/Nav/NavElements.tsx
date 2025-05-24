"use client"
import { links } from '@/docs/docs';
import LogoSvg from '@/svg/LogoSvg';
import Link from 'next/link';
import React, { useState } from 'react';


const NavElements = () => {
  const [activeLink, setActiveLink] = useState("Home")

  console.log(activeLink);
  
  return (
    <div className="container px-4 lg:px-0 flex items-center justify-between h-full">
      <div>
        <LogoSvg />
      </div>
      <div className="hidden lg:flex gap-5">
        {links.map((link,index)=>(
          <div key={index} className="px-3" onClick={()=>setActiveLink(link.label)}>
            <Link href={link.href} className='font-semibold group'>
              {link.label}
              <div className={`bg-white h-1 w-0 ${link.label==activeLink && 'w-full'} group-hover:w-full rounded duration-300`} />
            </Link>            
          </div>
        ))}
      </div>     
      <div className="hidden lg:flex gap-6">
        <div className="border px-6 py-3 bg-transparent hover:bg-white text-white hover:text-[#1927D2] rounded-full duration-300 cursor-pointer">Login / Register</div>
        <div className="border px-6 py-3 rounded-full text-primaryBlue hover:text-white bg-white hover:bg-transparent duration-300 cursor-pointer">Job Post</div>
      </div>     
    </div>
  );
}

export default NavElements;
