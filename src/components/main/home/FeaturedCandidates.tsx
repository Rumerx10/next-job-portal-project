"use client";

import CandidateCard from "@/components/common/CandidateCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Carousel from "@/components/common/Carousel";
const FeaturedCandidates = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 py-16">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 w-full  max-w-7xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">
          Featured Candidates{" "}
        </h1>
        <p className="text-medium text-gray-500 text-center">
          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
        </p>
        <div className="mt-10 md:mt-16 lg:mt-20">
          <CandidateCard  />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCandidates;
