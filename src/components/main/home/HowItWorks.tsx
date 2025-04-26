import React from "react";
import { GiArchiveRegister } from "react-icons/gi";

const HowItWorks = () => {
  const steps =[
    {
      icon:"",
      color:"",
      bg:"",
      title:"Register an account to start",
      desc:"Achieve virtually any design and layout from within the one template."
    },
    {
      icon:"",
      color:"",
      bg:"",
      title:"Register an account to start",
      desc:"Achieve virtually any design and layout from within the one template."
    },
    {
      icon:"",
      color:"",
      bg:"",
      title:"Register an account to start",
      desc:"Achieve virtually any design and layout from within the one template."
    }
  ]
  return (
    <div className="bg-[#f5f7fc] px-10 py-16">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">How It Works?</h1>
        <p className="text-medium text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna
        </p>        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {steps.map((step,index)=>(
          <div key={index} className="group flex flex-col p-10 items-center gap-5 bg-white shadow rounded-lg" >
          <div className="flex items-center justify-center bg-blue-400 w-16 h-16 rounded-full">
            <GiArchiveRegister size={40} />
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

