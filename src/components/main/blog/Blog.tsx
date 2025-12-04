import Image from "next/image";
import React, {useState} from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import ArticleCard from "@/components/common/ArticleCard";
import { IoIosSearch } from "react-icons/io";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";



const Blog = () => {
  const categories =[
    "Education","Information","Interview","Job Seeking", "Jobs","Learn","Skill","Travel"
  ]
  const data = [
    {
      img: "/newsArticle/attract.webp",
      date: "May 19, 2025",
      commentCount: "12",
      title: "Attract Sales And Profits",
      desc: "A job ravenously while Far much that one rank beheld after outside....",
    },
    {
      img: "/newsArticle/tips.webp",
      date: "April 31, 2025",
      commentCount: "9",
      title: "5 Tips For Your Job Interviews",
      desc: "A job ravenously while Far much that one rank beheld after outside....",
    },
    {
      img: "/newsArticle/overworked.webp",
      date: "June 25, 2025",
      commentCount: "13",
      title: "Overworked Newspaper Editor",
      desc: "A job ravenously while Far much that one rank beheld after outside....",
    },
  ];
  const postData = [
    {
      img: "/newsArticle/attract.webp",
      title: "Attract Sales And Profits",
      date: "August 9, 2021",
    },
    {
      img: "/newsArticle/tips.webp",
      title: "5 Tips For Your Job Interviews",
      date: "August 9, 2021",
    },
    {
      img: "/newsArticle/overworked.webp",
      title: "Overworked Newspaper Editor",
      date: "August 9, 2021",
    },
  ];

  const totalJobs = jobsData.length;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(totalJobs / itemsPerPage);



  return (
    <div className="">
      <div className="relative">
        <div className="flex h-96 w-full">
          <Image
            src="/f2.webp"
            alt="blog"
            height={320}
            width={1980}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Blog</h1>
          <div className="flex items-center justify-center gap-2">
            <Link href="/" className="text-gray-400 font-semibold text-lg">
              Home
            </Link>
            <IoIosArrowForward color="white" size={26} />
            <Link href="/" className="text-white font-semibold text-lg">
              Blog
            </Link>
          </div>
        </div>
      </div>
    <div className="flex w-full items-center justify-center">
      <div className="container max-auto w-full px-4 flex flex-col justify-center items-center flex gap-5 py-10">
        <div className="flex gap-5">
          <div className="w-8/12 grid grid-cols-2 2xl:grid-cols-3 gap-5">
          {data.map((item, index) => (
          <div
            key={index}
            className="group shadow-lg border flex flex-col items-center gap-5 rounded-lg"
          >
            <ArticleCard
              imgSrc={item.img}
              date={item.date}
              commentCount={item.commentCount}
              title={item.title}
              desc={item.desc}
            />
          </div>
          ))}
        </div>
        <div className="bg-bgGray w-4/12">
          <div>
            <h3 className="text-2xl font-medium">Search by Keyword</h3>
            <form>
              <div className="flex pl-4 pr-2 items-center text-black w-full">
                <IoIosSearch size={24} color="gray" />
                <input
                  type="text"
                  placeholder="Job title, keyword, or company"
                  className="ml-3 outline-none w-full"
                />
              </div>       
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Categories</h3>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Recent Posts</h3>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Tags</h3>
          </div>         
        </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Blog;
