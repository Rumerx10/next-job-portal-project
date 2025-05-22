import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import LogoSvgColored from "@/svg/LogoSvgColored";
import LogoSvg from "@/svg/LogoSvg";

const FooterLinks = [
  {
    title: "For Candidates",
    links: [
      "Browse Jobs",
      "Browse Categories",
      "Candidate Dashboard",
      "Job Alerts",
      "My Bookmarks",
    ],
  },
  {
    title: "For Employers",
    links: [
      "Browse Candidates",
      "Employer Dashboard",
      "Add Job",
      "Job Packages",
    ],
  },
  {
    title: "About Us",
    links: ["About Us", "Job Page Invoice", "Terms Page", "Blog", "Contact"],
  },
  {
    title: "Helpful Resources",
    links: [
      "Site Map",
      "Terms of Use",
      "Privacy Center",
      "Security Center",
      "Accessibility Center",
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-white py-20 bg-primaryBlue justify-center w-full">
      <div className="flex flex-col lg:flex-row items-center lg:gap-40 w-full py-0 lg:py-20 max-w-7xl">
        <div className="w-full lg:w-auto px-5 lg:px-0">
          <LogoSvg />
          <div className="my-6">
            <h3 className="text-xl font-semibold">Call us</h3>
            <p className="font-semibold text-lg">
              123 4567 890
            </p>
          </div>
          <div className="text-sm flex flex-col gap-2  xl:whitespace-nowrap">
            <p className="not-even:">
              329 Queensberry Street, North Melbourne VIC
            </p>
            <p>3051, Australia.</p>
            <p>support@superio.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-0 w-full py-10">
          {FooterLinks.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <ul className="flex flex-col gap-2">
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-sm cursor-pointer duration-300 flex items-center hover:gap-3 group"
                  >
                    <div className="h-0 w-0 group-hover:h-1 group-hover:w-6 rounded-full bg-white duration-300" />
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex px-5 lg:py-10 items-center justify-center border-t border-gray-300 w-full">
        <div className="flex flex-col mt-20 lg:mt-0 gap-5 lg:gap-0 lg:flex-row items-center justify-between w-full max-w-7xl">
          <p className="text-sm order-1 lg:order-2">
            @ 2023 Job Portal by rx-themes. All Right Reserved.
          </p>
          <div className="flex gap-6">
            <div className="h-14 w-14 flex items-center justify-center duration-300 cursor-pointe bg-gray-200 rounded-full">
              <IoLogoFacebook size={28} color="#1877F2" />
            </div>
            <div className="h-14 w-14 flex items-center justify-center duration-300 cursor-pointe bg-gray-200 rounded-full">
              {" "}
              <FaTwitter size={28} color="#1DA1F2" />
            </div>
            <div className="h-14 w-14 flex items-center justify-center duration-300 cursor-pointe bg-gray-200 rounded-full">
              {" "}
              <RiInstagramFill size={28} color="#E1306C" />
            </div>
            <div className="h-14 w-14 flex items-center justify-center duration-300 cursor-pointe bg-gray-200 rounded-full">
              <FaLinkedin size={28} color="#0A66C2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
