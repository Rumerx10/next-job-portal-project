import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import ArticleCard from "@/components/common/ArticleCard";
import { IoIosSearch } from "react-icons/io";

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
          <div className="border-2 border-red-500 w-full lg:w-8/12 grid grid-cols-2 2xl:grid-cols-3 auto-row-max gap-5">
            {data.map((item, index) => (          
              <ArticleCard
                key={index}
                imgSrc={item.img}
                date={item.date}
                commentCount={item.commentCount}
                title={item.title}
                desc={item.desc}
              />          
            ))}
          </div>
          <div className="space-y-6 py-8 px-6 bg-bgGray w-full lg:w-4/12">
            <div>
              <h3 className="text-xl font-medium">Search by Keyword</h3>
              <form>
                <div className="mt-4 rounded-md flex h-14 border-2 pl-4 pr-2 items-center text-black w-full">
                  <IoIosSearch size={24} color="gray" />
                  <input
                    type="text"
                    placeholder="Job title, keyword, or company"
                    className="ml-3 outline-none w-full"
                  />
                </div>       
              </form>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Categories</h3>
              <div className="space-y-3">
                {categories.map((cat,idx)=>(
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black rounded-full"></div>{cat}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Recent Posts</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-5">
                  <div  className="w-20 h-20">
                    <Image src="/newsArticle/attract.webp" alt="blog" height={80} width={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium">Attract Sales And Profits</h3>
                    <p className="text-gray-500">August 9, 2025 </p>
                  </div>           
                </div>
                <div className="flex items-center gap-5">
                  <div  className="w-20 h-20">
                    <Image src="/newsArticle/tips.webp" alt="blog" height={80} width={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium">5 Tips For Your Job Interviews</h3>
                    <p className="text-gray-500">August 9, 2025 </p>
                  </div>           
                </div>
                <div className="flex items-center gap-5">
                  <div  className="w-20 h-20">
                    <Image src="/newsArticle/overworked.webp" alt="blog" height={80} width={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium">Overworked Newspaper Editor</h3>
                    <p className="text-gray-500">August 9, 2025 </p>
                  </div>           
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {["App","Administrative","Andriod","Wordpress","Design","React"].map((item,idx)=>(
                  <p key={idx} className="bg-white px-5 py-2 text-gray-500">{item}</p>
                ))}
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
