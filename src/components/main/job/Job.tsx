"use client";

import Image from "next/image";
import React from "react";
import { PiHandbagFill } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { motion } from "framer-motion";
import { RiBookmarkLine } from "react-icons/ri";
import Link from "next/link";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

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
    <div className="">
      <div className="w-full bg-liteBlue h-96 flex items-center justify-center mt-20 lg:mt-24">
        <div className="lg:container px-4 mx-auto w-full h-96 flex items-center justify-between border-4 border-blue-500">
          <div className="w-8/12 group flex p-3 lg:p-5 gap-3 lg:gap-5 rounded-lg border-4 border-yellow-500">
            <div className="flex items-center justify-center rounded-full h-20 lg:h-24 w-20 lg:w-24 shrink-0 transition-all duration-500">
              <Image
                src={data.icon}
                alt="company logo"
                width={50}
                height={50}
                className="group-hover:scale-110 lg:group-hover:scale-125 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col gap-1 w-full cursor-pointer border-4 border-red-500">
              <h3 className="text-xl group-hover:text-primaryBlue font-semibold">
                {data.title}
              </h3>
              <div className="text-gray-500 text-sm flex flex-col lg:flex-row justify-between lg:items-center ">
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
                <div className="flex flex-wrap gap-3 items-center border-4 border-pink-500">
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
          <div className="flex gap-5 items-center">
            <Link href="">
              <button className="whitespace-nowrap bg-primaryBlue rounded-sm text-white font-medium px-16 py-5">Apply Now</button>
            </Link>
            <div className="bg-liteBlue rounded-sm text-white bg-white font-medium p-5"><RiBookmarkLine size={30} color="#1967d2" /></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="lg:container px-4 mx-auto flex gap-10">
          <div className="w-full lg:w-8/12">
            <h3 className="text-3xl font-semibold mb-5">Job Description</h3>
            As a Product Designer, you will work within a Product Delivery Team
            fused with UX, engineering, product and data talent. You will help
            the team design beautiful interfaces that solve business challenges
            for our clients. We work with a number of Tier 1 banks on building
            web-based applications for AML, KYC and Sanctions List management
            workflows. This role is ideal if you are looking to segue your
            career into the FinTech or Big Data arenas.
            <h3 className="text-3xl font-semibold my-5">
              Key Responsibilities
            </h3>
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
            reinventing the wheel Present your work to the wider business at
            Show & Tell sessions.
            <h3 className="text-3xl font-semibold my-5">Skill & Experience</h3>
            You have at least 3 years’ experience working as a Product Designer.
            You have experience using Sketch and InVision or Framer X You have
            some previous experience working in an agile environment – Think
            two-week sprints. You are familiar using Jira and Confluence in your
            workflow
          </div>
          <div className="flex flex-col w-full lg:w-4/12 bg-liteBlue p-5 rounded-sm">
            <h3 className="text-2xl font-semibold mb-5">Job Overview</h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <CiCalendarDate size={40} color="#1967d2" />
                <div>
                  <h4 className="text-xl font-medium">Date Posted:</h4>
                  <p className="text-gray-500">Posted 1 hours ago</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <GiSandsOfTime size={40} color="#1967d2" />
                <div>
                  <h4 className="text-xl font-medium">Expiration Date:</h4>
                  <p className="text-gray-500">July 01, 2025</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <CiLocationOn size={40} color="#1967d2" />
                <div>
                  <h4 className="text-xl font-medium">Location:</h4>
                  <p className="text-gray-500">London, UK</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <PiUserLight size={40} color="#1967d2" />
                <div>
                  <h4 className="text-xl font-medium">Job Title:</h4>
                  <p className="text-gray-500">Developer</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <IoTimeOutline size={40} color="#1967d2" />
                <div>
                  <h4 className="text-xl font-medium">Hours:</h4>
                  <p className="text-gray-500">40h/week</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <RiMoneyDollarCircleLine size={40} color="#1967d2" />
                <div>
                  <h4 className="text-xl font-medium">Rate:</h4>
                  <p className="text-gray-500">$15 - $25 / hour</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <TbMoneybag size={40} color="#1967d2" />
                <div>
                  <h4 className="text-xl font-medium">Salary:</h4>
                  <p className="text-gray-500">$35k - $45k</p>
                </div>
              </div>
            </div>

            <div className="w-full mt-10">
              <h3 className="text-2xl font-semibold mb-5">Job Location</h3>
              <div className="flex flex-col gap-3">
                <div className="">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3698524482215!2d90.38800147596022!3d23.876500283922272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43ca7f68407%3A0x3f083770ea2fa274!2sATI%20Limited!5e0!3m2!1sen!2sbd!4v1748779449135!5m2!1sen!2sbd"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="w-full mt-10">
              <h3 className="text-2xl font-semibold mb-5">Job Skills</h3>
              <div className="w-full flex flex-wrap items-center gap-3">
                <p className="px-4 py-2 bg-white rounded-sm">app</p>
                <p className="px-4 py-2 bg-white rounded-sm">administrative</p>
                <p className="px-4 py-2 bg-white rounded-sm">android</p>
                <p className="px-4 py-2 bg-white rounded-sm">wordpress</p>
                <p className="px-4 py-2 bg-white rounded-sm">design</p>
                <p className="px-4 py-2 bg-white rounded-sm">react</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
