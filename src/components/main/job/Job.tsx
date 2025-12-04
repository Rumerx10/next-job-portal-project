"use client";

import { JobsDataList, CompanyDetailList } from "@/docs/docs";
import Image from "next/image";
import React from "react";
import { PiHandbagFill } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { RiBookmarkLine } from "react-icons/ri";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import RelatedJobs from "./RelatedJobs";
import CompanyProfileCard from "./CompanyProfileCard";
import JobOverviewCard from "./JobOverviewCard";
import { useParams } from "next/navigation";

const Job = () => {
  const {id:jobId} = useParams();

  const jobData =  JobsDataList.find((job)=>job.id===Number(jobId));
  console.log(jobData);
  const companyData = CompanyDetailList.find((company)=>company.company===jobData.company)

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
        <div className="lg:container px-4 mx-auto w-full flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="w-full group flex items-center gap-3 lg:gap-5 rounded-lg">
            <div className="flex items-center justify-center rounded-full h-20 w-20 shrink-0 transition-all duration-500">
              <Image
                src={data.icon}
                alt="company logo"
                width={50}
                height={50}
                className="group-hover:scale-110 lg:group-hover:scale-125 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col w-full cursor-pointer">
              <h3 className="text-xl group-hover:text-primaryBlue font-semibold">
                {jobData?.title}
              </h3>
              <div className="text-gray-500 text-sm flex flex-col lg:flex-row gap-2 lg:gap-5 lg:items-center justify-between">
                <div className="flex flex-col lg:flex-row lg:gap-5">
                  <div className="flex flex-wrap gap-3 md:gap-5 items-center mb-3 lg:mb-0">
                    <div className="flex items-center gap-1">
                      <PiHandbagFill size={20} /> {jobData?.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <CiLocationOn size={20} /> {jobData?.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <MdOutlineAccessTime size={20} /> {jobData?.postedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <BsCashCoin size={20} />
                      {jobData?.salary}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 items-center">
                    {jobData?.type.map((type, index) => (
                      <span
                        key={index}
                        className={`text-sm px-4 py-1 whitespace-nowrap rounded-xl ${
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
                <div className="flex gap-5 items-center">
                  <Link href="">
                    <button className="whitespace-nowrap bg-primaryBlue rounded-sm text-white font-medium px-16 py-5">
                      Apply Now
                    </button>
                  </Link>
                  <div className="rounded-sm text-white bg-white font-medium p-4 border">
                    <RiBookmarkLine size={30} color="#1967d2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="lg:container px-4 mx-auto flex gap-10">
          <div className="w-full lg:w-8/12">
            <div>
              <h3 className="text-2xl font-semibold mb-5">Job Description</h3>
              {/* <p>
                As a Product Designer, you will work within a Product Delivery
                Team fused with UX, engineering, product and data talent. You will
                help the team design beautiful interfaces that solve business
                challenges for our clients. We work with a number of Tier 1 banks
                on building web-based applications for AML, KYC and Sanctions List
                management workflows. This role is ideal if you are looking to
                segue your career into the FinTech or Big Data arenas.
              </p> */}
              <p>{jobData?.description}</p>

              <h3 className="text-2xl font-semibold my-5">
                Key Responsibilities
              </h3>
              {/* <p>
                Be involved in every step of the product design cycle from
                discovery to developer handoff and user acceptance testing. Work
                with BAs, product managers and tech teams to lead the Product
                Design Maintain quality of the design process and ensure that when
                designs are translated into code they accurately reflect the
                design specifications. Accurately estimate design tickets during
                planning sessions. Contribute to sketching sessions involving
                non-designersCreate, iterate and maintain UI deliverables
                including sketch files, style guides, high fidelity prototypes,
                micro interaction specifications and pattern libraries. Ensure
                design choices are data led by identifying assumptions to test
                each sprint, and work with the analysts in your team to plan
                moderated usability test sessions. Design pixel perfect responsive
                UI’s and understand that adopting common interface patterns is
                better for UX than reinventing the wheel Present your work to the
                wider business at Show & Tell sessions.
              </p> */}
              <p>{jobData?.description}</p>

              <h3 className="text-2xl font-semibold my-5">Skill & Experience</h3>
              {/* <p>
                You have at least 3 years’ experience working as a Product
                Designer. You have experience using Sketch and InVision or Framer
                X You have some previous experience working in an agile
                environment – Think two-week sprints. You are familiar using Jira
                and Confluence in your workflow
              </p> */}
              <p>{jobData?.description}</p>
            </div>
            <RelatedJobs category={jobData?.category ?? ""} />         
          </div>

          <div className="flex flex-col w-full lg:w-4/12 h-auto bg-white">                    
            <JobOverviewCard jobData={jobData} />
            <CompanyProfileCard company={companyData} />
          </div>       
        </div>
      </div>
    </div>
  );
};

export default Job;

