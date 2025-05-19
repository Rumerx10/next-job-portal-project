import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

// { id, img, name, designation, location }: { id: string, img: string, name: string, designation: string, location: string }

export const data = [
    {
      id: "1",
      img: "/candidates/image1.webp",
      name: "Darlene Robertson",
      designation: "UI Designer",
      location: "London, UK",
    },
    {
      id: "2",
      img: "/candidates/image2.webp",
      name: "Wade Warren",
      designation: "Developer",
      location: "London, UK",
    },
    {
      id: "3",
      img: "/candidates/image3.webp",
      name: "Leslie Alexander",
      designation: "Marketing Expert",
      location: "London, UK",
    },
    {
      id: "4",
      img: "/candidates/image4.webp",
      name: "Floyd Miles",
      designation: "Charted Accountant",
      location: "London, UK",
    },
  ];

const CandidateCard = () => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full min-w-[280px] border group flex flex-col px-6 py-10 items-center gap-5 shadow-md rounded-lg"
        >
          <div className="flex items-center justify-center rounded-full h-24 w-24">
            <Image
              src={item.img}
              alt=""
              height={90}
              width={90}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium text-center">{item.name}</h3>
              <p className="text-sm text-primaryBlue text-center">
                {item.designation}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3   ">
              <CiLocationOn size={20} />
              <p className="text-gray-500 text-center">{item.location}</p>
            </div>
            <div className="flex items-center justify-center cursor-pointer mt-8 w-full rounded-lg bg-liteBlue text-primaryBlue hover:text-white hover:bg-primaryBlue duration-300 py-4">
              View Porfile
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidateCard;
