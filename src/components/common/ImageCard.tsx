import React from 'react';
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ImageProps {
  imgSrc: string;
  city: string;
  jobCount: string;
  className?: string;
}

const ImageCard: React.FC<ImageProps> = ({ imgSrc, city, jobCount, className = "" }) => {
  return (
    <div
      className={`group relative flex w-full overflow-hidden cursor-pointer rounded-lg ${className}`}
    >
      <Image
        src={imgSrc}
        height={240}
        width={410}
        alt={city}
        className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-full rounded-lg"
      />
      <div className="absolute inset-0 bg-transparent rounded-lg">
        <div className="h-full w-full flex flex-col justify-end gap-2 p-8 z-20">
          <h3 className="font-bold text-xl lg:text-2xl text-white">
            {city}
          </h3>
          <div className="flex items-center w-full">
            <p className="mr-2 text-white">
              {jobCount} jobs
            </p>
            <FaArrowRight
              color="white"
              className="group-hover:translate-x-2 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
