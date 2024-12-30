"use client";
import Image from "next/image";
import React from "react";
import Product from "./Product";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Define the Product and ProductVariant types for strong typing
interface ProductVariant {
  id: number;
  name: string;
}

interface Image {
  id: number;
  imageLink: string;
  imageAlt: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  mrp: number;
  discountInPercent: number;
  subTitle: string;
  productVariant: ProductVariant[];
  images: Image[];
  offer: string;
}

interface ProductProps {
  category: string;
  description: string;
  products: Product[];
}

const ProductsRange: React.FC<ProductProps> = ({
  category,
  description,
  products,
}) => {
  return (
    <section className="px-3 sm:px-14 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-8 space-y-5 ">
      <div className="flex flex-row justify-between">
        <div className="w-3/4 space-y-4 ">
          <h6 className="font-bold text-2xl text-black ">{category}</h6>
          <p className=" text-base font-medium text- ">{description}</p>
        </div>

        <div className="w-1/4 text-right">
          <button className="bg-[--primary-color] uppercase py-2 px-5 rounded-xl text-white text-base">
            view all{" "}
          </button>
        </div>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          navigation={{
            nextEl: ".custom-next", // Selector for the custom next button
            prevEl: ".custom-prev", // Selector for the custom prev button
          }}
          slidesPerView={2}
          breakpoints={{
            // Small screens (640px and up)
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // Medium screens (768px and up)
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // Large screens (1024px and up)
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // Extra-large screens (1280px and up)
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="swiper service-post-thumb-slider"
        >
          {products.map((product, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Product
                  id={product?.id}
                  name={product?.name}
                  category={product?.category}
                  mrp={product?.mrp}
                  discountInPercent={product?.discountInPercent}
                  subTitle={product?.subTitle}
                  images={product?.images}
                  offer={product?.offer}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="custom-prev absolute top-1/2 z-10 -left-2 sm:-left-12 text-white bg-[#30363C] p-2 rounded-full cursor-pointer">
          <FaAngleLeft size={20} color="#fff" />
        </div>
        <div className="custom-next absolute  top-1/2 z-10 -right-2 sm:-right-12 text-white bg-[#30363C] p-2 rounded-full cursor-pointer">
          <FaAngleRight size={20} color="#fff" />
        </div>
      </div>
    </section>
  );
};

export default ProductsRange;
