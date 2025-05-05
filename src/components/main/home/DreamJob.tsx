"use client"
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

const DreamJob = () => {
  return (
    <div className="relative my-20">
        <Image src="/bg5.webp" alt="" height={500} width={2000} className="object-cover w-full h-80 lg:h-auto" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 text-white">
          <motion.div
            initial={{y:60}}
            whileInView={{y:0}}
            transition={{duration: 0.5}}
            className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">
            Your Dream Jobs Are Waiting
          </motion.div>
          <motion.p
            initial={{y:60, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 0.5}}
            className="text-medium text-center">
            Over 1 million interactions, 50,000 success stories Make yours now.
          </motion.p>
          <motion.div
            initial={{y:60}}
            whileInView={{y:0}}
            transition={{duration: 0.5}}
            className="flex gap-5 items-center justify-center mt-6">
              <Link href="#" className="px-10 py-3 rounded-lg whitespace-nowrap bg-[#e2eaf8] duration-300 cursor-pointer text-primaryBlue hover:text-white hover:bg-[#0146a6]">Search Job</Link>
              <Link href="#" className="px-10 py-3 rounded-lg whitespace-nowrap bg-[#f9ab00] duration-300 cursor-pointer hover:bg-[#f9b700fd] text-white">Search Job</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;