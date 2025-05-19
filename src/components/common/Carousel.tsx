import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

type GalleryItem = {
  img: string;
  title: string;
  desc: string;
};

const Carousel = ({ data }: { data: GalleryItem[] }) => {
  return (
    <div className="w-full lg:hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true, clickable: true }}
        loop
        className="custom-swiper-pagination"
      >
        {data.map((item: GalleryItem, index: number) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-8 rounded-xl bg-white mx-4 my-10"
            >
              <div className="">
                <Image
                  src={item.img}
                  alt={item.title}
                  height={362}
                  width={362}
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-textBlack text-2xl font-bold">
                  {item.title}
                </h2>
                <p className="text-textGray text-center text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
