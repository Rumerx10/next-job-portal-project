import React from "react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from 'next/link';


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
    <div className="group bg-white p-2 rounded-lg">
      <div
        className={`relative flex flex-col w-full overflow-hidden cursor-pointer rounded-lg ${className}`}
      >
        <div className="flex rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
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
        <div className="h-full w-full flex flex-col justify-end gap-4 px-5 py-6">
          <div className="flex text-gray-500 items-center gap-5">
            <p>{date}</p>
            <div className="h-2 w-2 rounded-full bg-gray-500" />
            <p className="mr-2">{commentCount} comments</p>
          </div>
          <h3 className="font-bold text-xl lg:text-2xl ">{title}</h3>
          <p className="text-gray-500">{desc}</p>
          <Link href="" >
            <div className="flex text-primaryBlue items-center w-full">
              <p>Read More...</p>  
              <RiArrowRightSLine
                size={20}
                color="primaryBlue"
                className="group-hover:translate-x-2 transition-transform duration-500"
              />
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
