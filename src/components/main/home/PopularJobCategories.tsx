import React from "react";
import { FaCoins } from "react-icons/fa";
import Image from "next/image";

const PopularJobCategories = () => {
  const data = [
    {
      title: "Accounting / Finance",
      desc: "2 open positions",
      img: "/jobCategory/accounting.png",
    },
    {
      title: "Merketing",
      desc: "86 open positions",
      img: "/jobCategory/marketing.png",
    },
    {
      title: "Design",
      desc: "42 open positions",
      img: "/jobCategory/design.png",
    },
    {
      title: "Development",
      desc: "12 open positions",
      img: "/jobCategory/development.png",
    },
    {
      title: "Human Resource",
      desc: "55 open positions",
      img: "/jobCategory/humanResource.png",
    },
    {
      title: "Health Care",
      desc: "25 open positions",
      img: "/jobCategory/healthcare.png",
    },
    {
      title: "Project Management",
      desc: "92 open positions",
      img: "/jobCategory/management.png",
    },
  ];
  return (
    <div className="bg-[#f5f7fc] px-4 py-16">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">
          Popular Job Categories
        </h1>
        <p className="text-medium text-gray-500">
          2020 jobs live - 293 added today.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col p-5 items-center gap-5 bg-white shadow rounded-lg"
          >
            <div className="flex items-center justify-center rounded-full ring-2 p-3 h-18 w-18 transition-all duration-500">
              <Image src={item.img} alt={item.title} height={80} width={80} className="object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-center">{item.title}</h3>
              <p className="text-gray-500 text-sm text-center">({item.desc})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularJobCategories;
