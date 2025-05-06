import React from "react";
import { GiArchiveRegister } from "react-icons/gi";
import ArticleCard from "./../../common/ArticleCard";

const NewsArticles = () => {
  const data = [
    {
      img: "/newsArticle/attract.webp",
      date: "6 May, 2025",
      commentCount: "",
      title: "Attract Sales And Profits",
      desc: "A job ravenously while Far much that one rank beheld after outside....",
    },
    {
      img: "/newsArticle/tips.webp",
      date: "7 May, 2025",
      commentCount: "",
      title: "5 Tips For Your Job Interviews",
      desc: "A job ravenously while Far much that one rank beheld after outside....",
    },
    {
      img: "/newsArticle/overworked.webp",
      date: "8 May, 2025",
      commentCount: "",
      title: "Overworked Newspaper Editor",
      desc: "A job ravenously while Far much that one rank beheld after outside....",
    },
  ];
  return (
    <div className="bg-[#f5f7fc] px-10 py-16 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">
          Recent News Articles
        </h1>
        <p className="text-medium text-gray-500 text-center">
          Fresh job related news content posted each day.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center gap-5 bg-transparent rounded-lg"
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
    </div>
  );
};

export default NewsArticles;
