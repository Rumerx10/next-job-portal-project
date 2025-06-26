
"use client";

import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Link from "next/link";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";
import {JobType} from "@/docs/Types";



const JobOverviewCard=({jobData}:{jobData:JobType})=>{
  const {postedDate, type, expirationDate, location, title, weeklyHours,rate, salary,skills} = jobData;
  return (
    <div className="bg-liteBlue w-full rounded-sm p-5">
      <h3 className="text-2xl font-semibold mb-5">Job Overview</h3>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <CiCalendarDate size={24} color="#1967d2" />
          <div>
            <h4 className="text-lg font-medium">Date Posted:</h4>
            <p className="text-gray-500">{postedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <GiSandsOfTime size={24} color="#1967d2" />
          <div>
            <h4 className="text-lg font-medium">Expiration Date:</h4>
            <p className="text-gray-500">{expirationDate}</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <CiLocationOn size={24} color="#1967d2" />
          <div>
            <h4 className="text-lg font-medium">Location:</h4>
            <p className="text-gray-500">{location}</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <PiUserLight size={24} color="#1967d2" />
          <div>
            <h4 className="text-lg font-medium">Job Title:</h4>
            <p className="text-gray-500">{title}</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <IoTimeOutline size={24} color="#1967d2" />
          <div>
            <h4 className="text-lg font-medium">Hours:</h4>
            <p className="text-gray-500">{weeklyHours}/week</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <RiMoneyDollarCircleLine size={24} color="#1967d2" />
          <div>
            <h4 className="text-lg font-medium">Rate:</h4>
            <p className="text-gray-500">{rate} / hour</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <TbMoneybag size={24} color="#1967d2" />
          <div>
            <h4 className="text-lg font-medium">Salary:</h4>
            <p className="text-gray-500">{salary}</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <h3 className="text-2xl font-semibold mb-5">Job Location</h3>
        <div className="flex flex-col gap-3">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3698524482215!2d90.38800147596022!3d23.876500283922272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43ca7f68247%3A0x3f083770ea2fa274!2sATI%20Limited!5e0!3m2!1sen!2sbd!4v1748779449135!5m2!1sen!2sbd"
              width="100%"
              height="240"
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
          {type?.map((tp:string)=>(
            <p className="px-4 py-2 bg-white rounded-sm">{tp}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobOverviewCard;