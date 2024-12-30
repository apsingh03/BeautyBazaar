"use client";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const BannerCarousel: React.FC = () => {
  const images = [
    {
      id: 0,
      imageLink:
        "https://st-images.honasa.in/Desktop_WCTA_PERFUME_90679b804d.jpg?format=auto&width=&qualilty=",
      imageAlt: "Banner",
    },
    {
      id: 1,
      imageLink:
        "https://st-images.honasa.in/website_Body_Lotion_05e8650545.jpg?format=auto&width=&qualilty=",
      imageAlt: "Banner",
    },
    {
      id: 2,
      imageLink:
        "https://st-images.honasa.in/Moisture_therapy_range_Banner_GIF_7922b02eb3.gif?width=&qualilty=",
      imageAlt: "Banner",
    },
    {
      id: 3,
      imageLink:
        "https://st-images.honasa.in/Banner_1920_X512_copy_2_a7dcdb252c.jpg?format=auto&width=&qualilty=",
      imageAlt: "Banner",
    },
    {
      id: 4,
      imageLink:
        "https://st-images.honasa.in/Website_Gif_f20325fa88.gif?width=&qualilty=",
      imageAlt: "Banner",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: false }}
        navigation={{
          nextEl: ".bannerCarousel-custom-next", // Selector for the custom next button
          prevEl: ".bannerCarousel-custom-prev", // Selector for the custom prev button
        }}
        slidesPerView={1}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="swiper service-post-thumb-slider"
      >
        {images.map((data, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Image
                src={data?.imageLink}
                alt={data?.imageAlt}
                layout="responsive"
                width={1200}
                height={310}
                objectFit="contain"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div className="bannerCarousel-custom-prev absolute  top-1/2 z-10 left-3 text-white bg-[#30363C] p-2 rounded-full cursor-pointer">
        <FaAngleLeft size={20} color="#fff" />
      </div>
      <div className="bannerCarousel-custom-next absolute  top-1/2 z-10 right-3 text-white bg-[#30363C] p-2 rounded-full cursor-pointer">
        <FaAngleRight size={20} color="#fff" />
      </div>
    </div>
  );
};

export default BannerCarousel;
