import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import {CompanyType} from "@docs/Types";

const CompanyProfileCard = ({company}:{company:CompanyType}) => {
    console.log("compoany----->",company);
    const {company:name, email, founded, industry, location, phone, size} = company;
  return (
    <div className="bg-liteBlue w-full rounded-sm p-5 mt-10">
      <h3 className="text-2xl font-semibold mb-5">Company Overview</h3>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl my-8 font-inter">
        <div className="p-8">
          {/* Header Section */}
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0">
              {/* Placeholder for Logo */}
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-primaryBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
              <a href="#" className="text-sm text-primaryBlue hover:text-indigo-800 font-medium">
                View company profile
              </a>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-4 text-gray-700">
            <div className="flex  items-center justify-between w-full">
              <p className="font-medium col-span-1">Primary industry:</p>
              <p className="col-span-2 text-gray-900">{industry}</p>
            </div>
            <div className="flex  items-center justify-between w-full">
              <p className="font-medium col-span-1">Company size:</p>
              <p className="col-span-2 text-gray-900">{size}</p>
            </div>
            <div className="flex  items-center justify-between w-full">
              <p className="font-medium col-span-1">Founded in:</p>
              <p className="col-span-2 text-gray-900">{founded}</p>
            </div>
            <div className="flex  items-center justify-between w-full">
              <p className="font-medium col-span-1">Phone:</p>
              <p className="col-span-2 text-gray-900">{phone}</p>
            </div>
            <div className="flex  items-center justify-between w-full">
              <p className="font-medium col-span-1">Email:</p>
              <p className="col-span-2 text-gray-900">{email}</p>
            </div>
            <div className="flex  items-center justify-between w-full">
              <p className="font-medium col-span-1">Location:</p>
              <p className="col-span-2 text-gray-900">{location}</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-6">
            <div className="flex  items-center justify-between w-full">
              <p className="font-medium text-gray-700 col-span-1">Social media:</p>
              <div className="col-span-2 flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-primaryBlue">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primaryBlue">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primaryBlue">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primaryBlue">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Link Section */}
          <div className="mt-8">
            <a
              href="https://segment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-liteBlue hover:bg-primaryBlue text-primaryBlue hover:text-white font-medium py-3 px-4 rounded-lg transition duration-150 ease-in-out"
            >
              https://segment.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileCard;