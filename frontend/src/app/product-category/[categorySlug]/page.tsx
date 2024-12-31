// "use client";
import { Header } from "@/components/client/Header";
import BannerCarousel from "@/components/client/HomePage/BannerCarousel";
import { SubHeader } from "@/components/client/SubHeader";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { TbArrowsSort } from "react-icons/tb";

import { productsArray } from "../../../utils/ProductsArray";
import Product from "@/components/client/HomePage/ProductsRange/Product";

interface ProductCategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

const ProductCategoryPage: React.FC<ProductCategoryPageProps> = async ({
  params,
}) => {
  const { categorySlug } = await params;

  return (
    <>
      <Header />

      <SubHeader />

      <BannerCarousel />

      <div className="px-20 py-3  flex flex-row gap-2 items-center">
        <Link
          href={"/"}
          className="text-[--primary-color] text-sm font-medium "
        >
          {" "}
          Home{" "}
        </Link>
        <span>
          <MdOutlineChevronRight size={16} color="#000" />
        </span>
        <Link
          href={"#"}
          className="text-[#777777] text-sm capitalize font-medium "
        >
          {" "}
          Best {categorySlug} Products{" "}
        </Link>
      </div>

      <div className="py-10 px-20  space-y-5">
        <div className="flex flex-row justify-between pr-14">
          <div className="space-y-3">
            <h6 className="text-lg font-semibold text-[--text-dark-shade]">
              Our Products
            </h6>
            <div className="flex flex-row gap-3">
              {[
                "All ",
                "shampoo",
                "hair oil",
                "conditioner",
                "hair mask",
                "hair serum",
              ].map((data, idx) => {
                return (
                  <p
                    key={idx}
                    className="border px-5 py-2 rounded-full uppercase text-xs font-semibold  text-[--dark-gray] "
                  >
                    {data}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="text-[--primary-color] group  relative">
            <div className="flex flex-row items-center gap-1 cursor-pointer">
              <p>Sort By</p>
              <TbArrowsSort size={20} color="#00afef" />
            </div>

            <div className=" hidden group-hover:block bg-white border p-3 shadow-lg shadow-slate-300 absolute w-40 left-0 z-10 top-6 ">
              <p>Rating</p>
              <p>Price : High to Low</p>
              <p>Price: Low to High</p>
            </div>
          </div>
        </div>

        <div className="relative  grid grid-cols-4 gap-5">
          {productsArray.map((product, idx) => {
            return (
              <div key={idx} className="mb-4">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCategoryPage;
