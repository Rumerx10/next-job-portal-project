



import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  const steps =[
    {
      img:"/howItWorks/img1.png",
      title:"Register With Us",
      desc:"The latest design trends meet hand-crafted templates in Sassio Collection."
    },
    {
      img:"/howItWorks/img2.png",
      title:"Create Your Profile",
      desc:"The latest design trends meet hand-crafted templates in Sassio Collection."
    },
    {
      img:"/howItWorks/img3.png",
      title:"Upload Your Resume",
      desc:"The latest design trends meet hand-crafted templates in Sassio Collection."
    },
    {
      img:"/howItWorks/img4.png",
      title:"Now Take a Rest",
      desc:"The latest design trends meet hand-crafted templates in Sassio Collection."
    }
  ]
  return (
    <div className="bg-[#f5f7fc] px-10 py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">How It Works?</h1>
        <p className="text-medium text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna
        </p>        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 max-w-7xl">
        {steps.map((step,index)=>(
          <div key={index} className="group flex flex-col p-10 items-center gap-5 cursor-pointer bg-white hover:shadow-lg duration-300 rounded-lg" >
          <div className="flex items-center justify-center overflow-hidden border-4 group-hover:border-primaryBlue w-26 h-26 duration-300  rounded-full">
            <Image src={step.img} alt={step.title} width={150} height={150} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium text-center">{step.title}</h3>
            <p className="text-sm text-gray-500 text-center leading-6">{step.desc}</p>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default HowItWorks;

