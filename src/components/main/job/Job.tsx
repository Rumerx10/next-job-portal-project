"use client";

import Image from "next/image";
import React from "react";
import { PiHandbagFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { motion } from "framer-motion";
import { RiBookmarkLine } from "react-icons/ri";
import Link from "next/link";

const Job = () => {
  const data = {
    icon: "/segment.webp",
    title: "Software Engineer (Android), Libraries",
    orgName: "Segment",
    location: "London, UK",
    createdAt: "11 hours ago",
    salaryRange: "$35k - $45k",
    jobType: ["Full Time", "Private", "Urgent"],
  };
  return (
    <div className="w-full bg-liteBlue h-96 flex items-center justify-center mt-20 lg:mt-24">
      <div className="lg:container px-4 mx-auto w-full h-96 flex items-center justify-center border-2 border-blue-500">
        <div className="w-full group flex p-3 lg:p-5 gap-3 lg:gap-5 rounded-lg">
          <div className="flex items-center justify-center rounded-full h-20 lg:h-24 w-20 lg:w-24 shrink-0 transition-all duration-500">
            <Image
              src={data.icon}
              alt="company logo"
              width={50}
              height={50}
              className="group-hover:scale-110 lg:group-hover:scale-125 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col gap-1 w-full cursor-pointer">
            <h3 className="text-xl group-hover:text-primaryBlue font-semibold">
              {data.title}
            </h3>
            <div className="text-gray-500 text-sm flex flex-col lg:flex-row justify-between lg:items-center">
              <div className="flex flex-wrap gap-3 md:gap-5 items-center mb-3 lg:mb-0">
                <div className="flex items-center gap-1">
                  <PiHandbagFill size={20} /> {data.orgName}
                </div>
                <div className="flex items-center gap-1">
                  <CiLocationOn size={20} /> {data.location}
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineAccessTime size={20} /> {data.createdAt}
                </div>
                <div className="flex items-center gap-1">
                  <BsCashCoin size={20} />
                  {data.salaryRange}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                {data.jobType.map((type, index) => (
                  <span
                    key={index}
                    className={`text-sm mr-2 px-4 py-1 whitespace-nowrap rounded-xl ${
                      type === "Urgent"
                        ? "text-[#f9ab00] bg-[#f9ab0026]"
                        : type === "Private"
                        ? "text-[#34a853] bg-[#34a85326]"
                        : "text-primaryBlue bg-[#1967d226]"
                    }`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link href="">
            <button>Apply Now</button>
          </Link>
          <RiBookmarkLine />
        </div>
      </div>
      <div className="flex">
        <div className="w-full lg:w-8/12">
          <h3>Job Description</h3>
          As a Product Designer, you will work within a Product
          Delivery Team fused with UX, engineering, product and data talent. You
          will help the team design beautiful interfaces that solve business
          challenges for our clients. We work with a number of Tier 1 banks on
          building web-based applications for AML, KYC and Sanctions List
          management workflows. This role is ideal if you are looking to segue
          your career into the FinTech or Big Data arenas. 
          <h3>Key Responsibilities</h3>
          Be involved in every step of the product design cycle from discovery
          to developer handoff and user acceptance testing. Work with BAs,
          product managers and tech teams to lead the Product Design Maintain
          quality of the design process and ensure that when designs are
          translated into code they accurately reflect the design
          specifications. Accurately estimate design tickets during planning
          sessions. Contribute to sketching sessions involving
          non-designersCreate, iterate and maintain UI deliverables including
          sketch files, style guides, high fidelity prototypes, micro
          interaction specifications and pattern libraries. Ensure design
          choices are data led by identifying assumptions to test each sprint,
          and work with the analysts in your team to plan moderated usability
          test sessions. Design pixel perfect responsive UI’s and understand
          that adopting common interface patterns is better for UX than
          reinventing the wheel Present your work to the wider business at Show
          & Tell sessions. 
          <h3>Skill & Experience</h3>
          You have at least 3 years’ experience working as a Product Designer. You have experience using
          Sketch and InVision or Framer X You have some previous experience
          working in an agile environment – Think two-week sprints. You are
          familiar using Jira and Confluence in your workflow
        </div>
        <div className="w-full lg:w-4/12">
          <h3>JOb Overview</h3>
          <div>
            <div>
              <div>
                <Image src="" alt="" height={200} width={200} />
              </div>
              <div>
                <h4>Date Posted:</h4>
                <p>Posted 1 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
