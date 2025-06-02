
"use client";

import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Link from "next/link";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";


const JobOverviewCard=()=>{
  return (
    <div className="bg-liteBlue w-full rounded-sm p-5">
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
  )
}

export default JobOverviewCard;