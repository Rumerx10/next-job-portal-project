import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiBookmarkLine } from "react-icons/ri";
import { PiHandbagFill } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { JobsDataList } from "@/docs/docs";

const RelatedJobs = ({ category }: { category: string }) => {
  const relatedJobs = JobsDataList.filter((job) => job.category === category);
  const initialCount = 2;
  const step = 2;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleToggle = () => {
    if (visibleCount >= relatedJobs.length) {
      setVisibleCount(initialCount);
    } else {
      setVisibleCount((prev) =>
        Math.min(prev + step, relatedJobs.length)
      );
    }
  };

  const visibleJobs = relatedJobs.slice(0, visibleCount);

  return (
    <div>
      <h3 className="text-2xl font-semibold my-5">Related Jobs</h3>
      <div>
        <div className="container mx-auto mt-10 flex flex-col gap-5">
          {visibleJobs.map((job, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="relative group flex p-3 lg:p-5 items-center gap-3 lg:gap-5 bg-white shadow rounded-lg"
            >
              <div className="absolute cursor-pointer right-3 top-3 lg:right-5 lg:top-5 z-10 overflow-hidden rounded-full">
                <div className="rounded-sm text-white hover:scale-110 duration-300 bg-liteBlue font-medium p-2">
                  <RiBookmarkLine size={20} color="#1967d2" />
                </div>
              </div>

              <div className="flex items-center justify-center bg-[#e2eaf8] rounded-full h-20 lg:h-24 w-20 lg:w-24 shrink-0 transition-all duration-500">
                <Image
                  src="/invision.webp"
                  alt="company logo"
                  width={50}
                  height={50}
                  className="group-hover:scale-110 lg:group-hover:scale-125 transition-all duration-500"
                />
              </div>

              <div className="flex flex-col gap-1 w-full cursor-pointer">
                <h3 className="text-xl group-hover:text-primaryBlue font-semibold">
                  {job.title}
                </h3>
                <div className="text-gray-500 text-sm flex flex-col lg:flex-row justify-between lg:items-center">
                  <div className="flex flex-wrap gap-3 md:gap-5 items-center mb-3 lg:mb-0">
                    <div className="flex items-center gap-1">
                      <PiHandbagFill size={20} /> {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <CiLocationOn size={20} /> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <MdOutlineAccessTime size={20} /> {job.postedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <BsCashCoin size={20} /> {job.salary}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 items-center">
                    {job?.type.map((type, i) => (
                      <span
                        key={i}
                        className={`text-sm mr-2 px-4 py-1 whitespace-nowrap rounded-xl ${
                          type === "Urgent"
                            ? "text-[#f9ab00] bg-[#f9ab0026]"
                            : type === "Private"
                            ? "text-[#34a853] bg-[#34a85326]"
                            : "text-primaryBlue bg-[#1967d226]"
                        }`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {relatedJobs.length > initialCount && (
          <div className="flex w-full items-center justify-center mt-16">
            <button
              onClick={handleToggle}
              className="px-12 py-5 rounded-lg bg-primaryBlue text-white"
            >
              {visibleCount >= relatedJobs.length ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedJobs;
