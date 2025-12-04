"use client"
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { AboutData } from '@/docs/docs';
import ContactUs from '../contactUs/ContactUs';
import { motion } from "framer-motion";


const About = () => {
  
  return (
    <div className="mt-20 lg:mt-24">
      <div className="relative">
        <div className="flex h-96 w-full">
          <Image
            src="/f2.webp"
            alt="blog"
            height={320}
            width={1980}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
          <div className="flex items-center justify-center gap-2">
            <Link href="/" className="text-gray-400 font-semibold text-lg">
              Home
            </Link>
            <IoIosArrowForward color="white" size={26} />
            <Link href="/" className="text-white font-semibold text-lg">
              About Us
            </Link>
          </div>
        </div>
      </div> 
      <div className="lg:container w-full px-4 py-10 lg:py-20 mx-auto flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="w-full">
            <div className="flex object-cover w-full min-h-[400px] h-full">
              <Image src="/about/img1.webp" alt="" height={312} width={400} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 w-full ">
            <div className="flex object-cover w-full h-[45%]">
              <Image src="/about/img2.webp" alt="" height={150} width={400} />
            </div>
            <div className="flex object-cover w-full h-[60%]">
              <Image src="/about/img3.webp" alt="" height={312} width={400} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 w-full">
            <div className="flex object-cover w-full h-[60%]">
              <Image src="/about/img4.webp" alt="" height={312} width={400} />
            </div>
            <div className="flex object-cover w-full h-[45%]">
              <Image src="/about/img5.webp" alt="" height={150} width={400} />
            </div>
          </div>
          <div className="w-full">
            <div className="flex object-cover w-full min-h-[400px] h-full">
              <Image src="/about/img6.webp" alt="" height={312} width={400} />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40 mt-10 lg:mt-20">
          {AboutData.map((item,index)=>(
            <div key={index} className="flex flex-col items-center max-w-96">
              <h1 className="text-4xl lg:text-5xl font-bold">{item.value}</h1>
              <p className="">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 mt-10 lg:mt-20">
          <div>
            <h3 className="text-3xl lg:text-4xl font-semibold mb-3">About Organization</h3>
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="h-1 w-36 bg-red-600 my-7" />
          </div>
          <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.</p>
          <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.</p>
        </div>
        <ContactUs />   
      </div>  
    </div>
  );
}

export default About;
