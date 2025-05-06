import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ImageProps {
  imgSrc: string;
  date: string;
  commentCount: string;
  title: string;
  desc: string;
  className?: string;
}

const ArticleCard: React.FC<ImageProps> = ({
  imgSrc,
  date,
  commentCount,
  title,
  desc,
  className = "",
}) => {
  return (
    <div className="">
      <div
        className={`group relative flex flex-col w-full overflow-hidden cursor-pointer rounded-lg ${className}`}
      >
        <div className="flex rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500">
          <Image
            src={imgSrc}
            height={260}
            width={410}
            alt={title}
            className="object-cover w-full h-[260px]"
          />
        </div>
      </div>
      <div className="">
        <div className="h-full w-full flex flex-col justify-end gap-2 py-8">
          <h3 className="font-bold text-xl lg:text-2xl ">{title}</h3>
          <div className="flex items-center w-full">
            <p className="mr-2">{commentCount} comments</p>
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

export default ArticleCard;
