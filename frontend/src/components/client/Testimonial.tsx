"use client";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonial = [
    {
      id: 0,
      name: "ajay",
      profilePic: "https://images.mamaearth.in/wysiwyg/Review3.png?auto=format",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente illo aperiam. Quam dignissimos culpa repellendus nemo dicta deleniti at vel vitae itaque saepe. Voluptatem magnam dicta praesentium hic quaerat?",
    },
    {
      id: 1,
      name: "Ajay",
      profilePic: "https://images.mamaearth.in/wysiwyg/Review3.png?auto=format",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente illo aperiam. Quam dignissimos culpa repellendus nemo dicta deleniti at vel vitae itaque saepe. Voluptatem magnam dicta praesentium hic quaerat?",
    },
    {
      id: 2,
      name: "ajay",
      profilePic: "https://images.mamaearth.in/wysiwyg/Review3.png?auto=format",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente illo aperiam. Quam dignissimos culpa repellendus nemo dicta deleniti at vel vitae itaque saepe. Voluptatem magnam dicta praesentium hic quaerat?",
    },
    {
      id: 3,
      name: "ajay",
      profilePic: "https://images.mamaearth.in/wysiwyg/Review3.png?auto=format",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente illo aperiam. Quam dignissimos culpa repellendus nemo dicta deleniti at vel vitae itaque saepe. Voluptatem magnam dicta praesentium hic quaerat?",
    },
    {
      id: 4,
      name: "ajay",
      profilePic: "https://images.mamaearth.in/wysiwyg/Review3.png?auto=format",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente illo aperiam. Quam dignissimos culpa repellendus nemo dicta deleniti at vel vitae itaque saepe. Voluptatem magnam dicta praesentium hic quaerat?",
    },
  ];

  return (
    <div
      className="px-3 sm:px-14 md:px-16 lg:px-20 xl:px-24 py-5  sm:py-10 md:py-20 space-y-20"
      style={{
        backgroundImage:
          "url(https://images.mamaearth.in/wysiwyg/ctgry_background.png)",
        backgroundSize: "cover",
      }}
    >
      <p className="text-center text-2xl font-medium">What Our Customers Say</p>

      <div className="relative ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
            1280: { slidesPerView: 3, spaceBetween: 100 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index dynamically
          className="swiper service-post-thumb-slider"
        >
          {testimonial.map((testimonial, idx) => {
            return (
              <SwiperSlide key={idx} className="shadow-lg  shadow-gray-500">
                <div
                  className={`space-y-5 border p-5 text-center bg-white   rounded-xl
                    
                    ${
                      idx === activeIndex
                        ? "h-[325px]" // Active slide
                        : "h-[300px]" // Inactive slides
                    }

                    ${
                      idx === activeIndex
                        ? "w-[350px]" // Active slide
                        : "w-[300px]" // Inactive slides
                    }`}
                >
                  <p className="text-base font-medium text-[--text-dark-shade]">
                    {testimonial?.msg}
                  </p>

                  <div className="flex flex-row gap-3">
                    <Image
                      src={testimonial?.profilePic}
                      width={75}
                      height={75}
                      alt="user Profile"
                      className="rounded-full"
                    />
                    <p className="text-lg text-center content-center capitalize">
                      {testimonial?.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-prev absolute top-1/2 z-10 -left-12 text-white bg-[#30363C] p-2 rounded-full cursor-pointer">
          <FaAngleLeft size={20} color="#fff" />
        </div>
        <div className="custom-next absolute top-1/2 z-10 -right-12 text-white bg-[#30363C] p-2 rounded-full cursor-pointer">
          <FaAngleRight size={20} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
