import React from "react";
import { FaCoins } from "react-icons/fa";

const PopularJobCategories = () => {
  const categories = [
    {
      title: "Accounting / Finance",
      desc: "2 open positions",
      icon: "",
      bg: "",
    },
    {
      title: "Accounting / Finance",
      desc: "2 open positions",
      icon: "",
      bg: "",
    },
    {
      title: "Accounting / Finance",
      desc: "2 open positions",
      icon: "",
      bg: "",
    },
    {
      title: "Accounting / Finance",
      desc: "2 open positions",
      icon: "",
      bg: "",
    },
    {
      title: "Accounting / Finance",
      desc: "2 open positions",
      icon: "",
      bg: "",
    },
    {
      title: "Accounting / Finance",
      desc: "2 open positions",
      icon: "",
      bg: "",
    },
    {
      title: "Accounting / Finance",
      desc: "2 open positions",
      icon: "",
      bg: "",
    },
  ];
  return (
    <div className="bg-[#f5f7fc] px-10 py-16">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">
          Popular Job Categories
        </h1>
        <p className="text-medium text-gray-500">
          2020 jobs live - 293 added today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col p-5 items-center gap-5 bg-white shadow rounded-lg"
          >
            <div className="group-hover:bg-[#1967d2] flex items-center justify-center bg-[#e2eaf8] rounded-full h-20 w-20 transition-all duration-500">
              <FaCoins
                size={40}
                className="text-[#1967d2] group-hover:text-white duration-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-500 text-sm text-center">({category.desc})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularJobCategories;
