import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import LogoSvg from "@/svg/LogoSvg";

const Footer = () => {
  return (
    <div className="bg-red-200 border-t-4 border-gray-500">
      <div>
        <div>
          <LogoSvg />
          <div>
            <h3>Call us</h3>
            <p>123 4567 890</p>
          </div>
          <div>
            <p>329 Queensberry Street, North</p>
            <p>Melbourne VIC</p>
            <p>3051, Australia.</p>
            <p>support@superio.com</p>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div className="flex px-3 py-10 items-center justify-between">
        <p className="text-sm text-gray-500">
          @ 2023 Job Portal by rx-themes. All Right Reserved.
        </p>
        <div className="flex gap-6">
          <div className="h-8 w-8 flex items-center justify-center duration-300 cursor-pointer hover:bg-white rounded-full">
            <IoLogoFacebook size={20} color="#1877F2" />
          </div>
          <div className="h-8 w-8 flex items-center justify-center duration-300 cursor-pointer hover:bg-white rounded-full">
            {" "}
            <FaTwitter size={20} color="#1DA1F2" />
          </div>
          <div className="h-8 w-8 flex items-center justify-center duration-300 cursor-pointer hover:bg-white rounded-full">
            {" "}
            <RiInstagramFill size={20} color="#E1306C" />
          </div>
          <div className="h-8 w-8 flex items-center justify-center duration-300 cursor-pointer hover:bg-white rounded-full">
            <FaLinkedin size={20} color="#0A66C2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
