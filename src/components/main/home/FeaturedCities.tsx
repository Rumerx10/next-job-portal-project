import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ImageCard from "@/components/common/ImageCard";

const FeaturedCities = () => {
  const data = [
    {
      img: "/featuredCities/paris.webp",
      city: "Paris",
      jobCount: "17",
    },
    {
      img: "/featuredCities/london.webp",
      city: "London",
      jobCount: "14",
    },
    {
      img: "/featuredCities/miami.webp",
      city: "Miami",
      jobCount: "12",
    },
    {
      img: "/featuredCities/la.webp",
      city: "Los Angeles",
      jobCount: "15",
    },
  ];

  return (
    <div className="flex flex-col gap-5 py-16 px-4 lg:items-center">
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 w-full ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">
            Featured Cities{" "}
          </h1>
          <p className="text-medium text-gray-500 text-center">
            Explore job opportunities in these popular cities.
          </p>
        </div>
        <div className="container mx-auto flex w-full border-4 border-red-500">
          <div className="flex flex-col w-full lg:flex-row gap-5 justify-between">
            <div className="flex flex-col lg:flex-row gap-5 w-full">
              <div className="flex w-full lg:w-4/12 h-auto">
                <ImageCard
                  imgSrc="/featuredCities/ny.webp"
                  city="New York"
                  jobCount="12"
                />
              </div>
              <div className="w-full lg:w-8/12 grid md:grid-cols-2 gap-5">
                {data.map((item, index) => (
                  <ImageCard
                    key={index}
                    imgSrc={item.img}
                    city={item.city}
                    jobCount={item.jobCount}
                    className="min-h-[240px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCities;
