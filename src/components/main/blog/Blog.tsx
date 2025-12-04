import Image from "next/image";
import React, {useState} from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import ArticleCard from "@/components/common/ArticleCard";
import { IoIosSearch } from "react-icons/io";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";



const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
        <div className="container max-auto w-full px-4 flex flex-col justify-center items-center gap-5 py-10">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-8/12 grid grid-cols-2 2xl:grid-cols-3 gap-5">
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
              <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                <div className="mb-4 sm:mb-0">
                  <p className="text-sm text-gray-500">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, totalJobs)} of{" "}
                    {totalJobs} jobs
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="!rounded-button whitespace-nowrap"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className="!rounded-button whitespace-nowrap min-w-[32px]"
                        >
                          {page}
                        </Button>
                      )
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="!rounded-button whitespace-nowrap"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-bgGray w-full lg:w-4/12 p-5 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">Search by Keyword</h3>
                <form>
                  <div className="flex pl-3 pr-2 rounded-lg shadow-lg items-center text-black bg-white w-full">
                    <IoIosSearch size={24} color="gray" />
                    <input
                      type="text"
                      placeholder="Job title, keyword, or company"
                      className="ml-2 outline-none w-full h-16"
                    />
                  </div>
                </form>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">Categories</h3>
                <ul className="list-disc pl-5">
                  <li className="hover:underline cursor-pointer hover:text-sky-800 text-textGray">
                    Education
                  </li>
                  <li className="hover:underline cursor-pointer hover:text-sky-800 text-textGray">
                    Information
                  </li>
                  <li className="hover:underline cursor-pointer hover:text-sky-800 text-textGray">
                    Interview
                  </li>
                  <li className="hover:underline cursor-pointer hover:text-sky-800 text-textGray">
                    Job Seeking
                  </li>
                  <li className="hover:underline cursor-pointer hover:text-sky-800 text-textGray">
                    Jobs
                  </li>
                  <li className="hover:underline cursor-pointer hover:text-sky-800 text-textGray">
                    Learn
                  </li>
                  <li className="hover:underline cursor-pointer hover:text-sky-800 text-textGray">
                    Skill
                  </li>
                  <li className="hover:underline cursor-pointer hover:text-sky-800 text-textGray">
                    Travel
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">Recent Posts</h3>
                <div className="flex flex-col gap-5">
                  {postData.map((item, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <div className="flex w-20 h-20 overflow-hidden">
                        <Image
                          className="object-cover hover:scale-110 duration-300"
                          src={item.img}
                          alt={item.title}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="text-textGray">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  <p className="hover:bg-primaryBlue hover:text-white duration-300 cursor-pointer rounded-xs px-5 py-2 bg-white border text-textGray">
                    App
                  </p>
                  <p className="hover:bg-primaryBlue hover:text-white duration-300 cursor-pointer rounded-xs px-5 py-2 bg-white border text-textGray">
                    Administrative
                  </p>
                  <p className="hover:bg-primaryBlue hover:text-white duration-300 cursor-pointer rounded-xs px-5 py-2 bg-white border text-textGray">
                    Android
                  </p>
                  <p className="hover:bg-primaryBlue hover:text-white duration-300 cursor-pointer rounded-xs px-5 py-2 bg-white border text-textGray">
                    Wordpress
                  </p>
                  <p className="hover:bg-primaryBlue hover:text-white duration-300 cursor-pointer rounded-xs px-5 py-2 bg-white border text-textGray">
                    Design
                  </p>
                  <p className="hover:bg-primaryBlue hover:text-white duration-300 cursor-pointer rounded-xs px-5 py-2 bg-white border text-textGray">
                    React
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
