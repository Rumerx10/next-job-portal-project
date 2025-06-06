import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbFileUpload } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

const Hero = () => {
  return (
    <div className="relative flex h-[1000px] w-full">
      <Image
        src="/hero-bg.webp"
        alt="hero"
        width={1980}
        height={1000}
        className="w-full h-full object-cover"
      />
      <div className="absolute flex items-center justify-center inset-0">
        <div className="container flex flex-col items-center justify-center gap-5 w-full px-4 mx-auto">
          <div className="flex justify-center lg:justify-between items-center w-full gap-20">
            <div className="text-white w-full lg:w-7/12">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                Find Your Perfect Job <br /> Match
              </h1>
              <p className="my-5 lg:my-10 tracking-wide">
                Find Jobs, Employment & Career Opportunities
              </p>

              <form className="w-full hidden lg:flex backdrop-blur-3xl bg-white/90 rounded-md py-4 px-4">
                <div className="flex w-full gap-2">
                  <div className="flex pl-4 pr-2 items-center text-black w-full">
                    <IoIosSearch size={24} color="gray" />
                    <input
                      type="text"
                      placeholder="Job title, keyword, or company"
                      className="ml-3 outline-none w-full"
                    />
                  </div>
                  <div className="h-auto w-0.5 bg-gray-300" />
                  <div className="flex pl-4 pr-2 items-center text-black w-full">
                    <SlLocationPin size={24} color="gray" />
                    <input
                      type="text"
                      placeholder="City or postcode"
                      className="ml-3 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 px-8 py-4 rounded-sm whitespace-nowrap"
                  >
                    Find Jobs
                  </button>
                </div>
              </form>

              <form className="flex lg:hidden flex-col gap-5 rounded-md py-4">
                <div className="flex backdrop-blur-3xl bg-white/90 pl-4 pr-2 rounded-sm items-center text-black">
                  <IoIosSearch size={24} color="gray" />
                  <input
                    type="text"
                    placeholder="Job title, keyword, or company"
                    className="ml-3 leading-20 outline-none"
                  />
                </div>
                <div className="flex backdrop-blur-3xl bg-white/90 pl-4 pr-2 rounded-sm items-center text-black">
                  <SlLocationPin size={24} color="gray" />
                  <input
                    type="text"
                    placeholder="City or postcode"
                    className="ml-3 leading-20 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 px-8 py-4 rounded-sm whitespace-nowrap"
                >
                  Find Jobs
                </button>
              </form>

              <p className="my-8">
                Popular Searches: Designer, Developer, Web, IOS, PHP, Senior,
                Engineer
              </p>
              <div className="flex flex-col lg:flew-row w-full gap-10 lg:items-center justify-between lg:mt-16">
                <div className="flex flex-col lg:flex-row w-full gap-5 items-start lg:items-center justify-between">
                  <div className="flex gap-5 items-center justify-between lg:justify-start w-full">
                    <p className="text-white">10k+ Candidates</p>
                    <Image
                      src="/clients.webp"
                      alt="clients"
                      width={160}
                      height={40}
                      className="w-52 h-10 object-contain"
                    />
                  </div>
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-2 text-white mt-20 lg:mt-0"
                  >
                    <TbFileUpload color="white" size={24} />
                    <p className="whitespace-nowrap">Upload your CV</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex h-[635px] w-5/12">
              <Image
                src="/hero-img.webp"
                height={1000}
                width={1000}
                alt="hero-img"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
