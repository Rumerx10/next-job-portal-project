import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbFileUpload } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";


const Hero = () => {
  return (
    <div className="flex h-screen w-full">
      <Image
        src="/hero-bg.webp"
        alt="hero"
        width={1000}
        height={1000}
        className="w-full h-screen object-cover"
      />
      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-screen">
        <div className="flex flex-col gap-20 w-full max-w-7xl">
          <div className="flex justify-between items-center w-full gap-20 mt-40">
            <div className="text-white">
              <h1 className="text-5xl font-semibold">Find Your Perfect Job Match</h1>
              <p className="my-10 tracking-wide">Find Jobs, Employment & Career Opportunities</p>
              <form className="flex backdrop-blur-3xl bg-white/90 rounded-md py-4 px-4">
                <div className="flex pl-4 pr-2 items-center text-black">
                  <IoIosSearch size={24} color="gray" />
                  <input type="text" placeholder="Job title, keyword, or company" className="ml-3 outline-none" />
                </div>
                <div className="h-auto w-0.5 bg-gray-300" />
                <div className="flex pl-8 pr-2 items-center text-black">
                  <SlLocationPin size={24} color="gray" />
                  <input type="text" placeholder="City or postcode" className="ml-3 outline-none" />
                </div>      
                <button type="submit" className="ml-4 bg-blue-600 px-8 py-4 rounded-sm whitespace-nowrap">Find Jobs</button>
              </form>
              <p className="mt-8">
                Popular Searches: Designer, Developer, Web, IOS, PHP, Senior,
                Engineer
              </p>
            </div>
            <div className="right">
              <Image src="/hero-img.webp" height={1000} width={1000} alt="hero-img"  className="object-cover"/>
              {/* hero image */}
            </div>
          </div>
          <div className = "flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <p className="text-white">10k+ Candidates</p>
              <Image
                src="/clients.webp"
                alt="clients"
                width={200}
                height={60}
                className="w-52 h-16 object-cover"
              />
            </div>
            <Link href="#" className="flex items-center gap-2 text-white">
              <TbFileUpload  color="white" size={24}/>
              <p>Upload your CV</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
