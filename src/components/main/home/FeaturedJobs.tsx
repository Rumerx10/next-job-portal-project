"use client"

import Image from "next/image";
import React from "react";
import { PiHandbagFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { motion } from 'framer-motion';


const data = [
  {
    icon: "/segment.webp",
    jobTitle: "Software Engineer (Android), Libraries",
    orgName: "Segment",
    location: "London, UK",
    createdAt: "11 hours ago",
    salaryRange: "$35k - $45k",
    jobType: ["Full Time", "Private", "Urgent"],
  },
  {
    icon: "/catalyst.webp",
    jobTitle: "Recruiting Coordinator",
    orgName: "Catalyst",
    location: "London, UK",
    createdAt: "11 hours ago",
    salaryRange: "$35k - $45k",
    jobType: ["Freelancer", "Private", "Urgent"],
  },
  {
    icon: "/invision.webp",
    jobTitle: "Product Manager, Studio",
    orgName: "Upwork",
    location: "London, UK",
    createdAt: "11 hours ago",
    salaryRange: "$35k - $45k",
    jobType: ["Temporary", "Private", "Urgent"],
  },
  {
    icon: "/up.webp",
    jobTitle: "Senior Product Designer",
    orgName: "Figma",
    location: "London, UK",
    createdAt: "11 hours ago",
    salaryRange: "$35k - $45k",
    jobType: ["Full Time", "Private", "Urgent"],
  },
  {
    icon: "/figma.webp",
    jobTitle: "Software Engineer (Android), Libraries",
    orgName: "Figma",
    location: "London, UK",
    createdAt: "11 hours ago",
    salaryRange: "$35k - $45k",
    jobType: ["Freelancer", "Private", "Urgent"],
  },
];

const FeaturedJobs = () => {
  return (
    <div className="bg-bgGray px-10 py-16">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">
          Featured Jobs{" "}
        </h1>
        <p className="text-medium text-gray-500 text-center">
          Know your worth and find the job that qualify your life
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-10 max-w-7xl mx-auto">
        {data.map((category, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className="group flex p-3 lg:p-5 items-center gap-3 lg:gap-5 bg-white shadow rounded-lg"
          >
            <div className="flex items-center justify-center bg-[#e2eaf8] rounded-full h-20 lg:h-24 w-20 lg:w-24 shrink-0 transition-all duration-500">
              <Image
                src={category.icon}
                alt="company logo"
                width={50}
                height={50}
                className="group-hover:scale-110 lg:group-hover:scale-125 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col gap-1 w-full cursor-pointer">
              <h3 className="text-xl group-hover:text-primaryBlue font-semibold">{category.jobTitle}</h3>
              <div className="text-gray-500 text-sm flex flex-col lg:flex-row justify-between lg:items-center">
                <div className="flex flex-wrap gap-3 md:gap-5 items-center mb-3 lg:mb-0">
                  <div className="flex items-center gap-1"><PiHandbagFill size={20} /> {category.orgName}</div>
                  <div className="flex items-center gap-1"><CiLocationOn size={20} /> {category.location}</div>
                  <div className="flex items-center gap-1"><MdOutlineAccessTime size={20} /> {category.createdAt}</div>
                  <div className="flex items-center gap-1"><BsCashCoin size={20} />{category.salaryRange}</div>
                </div>
                <div className="flex gap-2 items-center">
                  {category.jobType.map((type, index) => (
                    <span
                      key={index}
                      className={`text-sm mr-2 px-4 py-1 whitespace-nowrap rounded-xl ${type==="Urgent"?"text-[#f9ab00] bg-[#f9ab0026]":type==="Private"?"text-[#34a853] bg-[#34a85326]":"text-[#1967d2] bg-[#1967d226]"}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex w-full items-center justify-center mt-16">
        <button className="px-12 py-5 rounded-lg bg-primaryBlue text-white">Load More Listing</button>
      </div>


    </div>
  );
};

export default FeaturedJobs;
