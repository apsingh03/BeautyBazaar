// "use client";
import { Header } from "@/components/client/Header";
import BannerCarousel from "@/components/client/HomePage/BannerCarousel";
import { SubHeader } from "@/components/client/SubHeader";
import Link from "next/link";
import React from "react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
// import { FaChevronRight } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import { TbArrowsSort } from "react-icons/tb";

import { productsArray } from "../../../utils/ProductsArray";
import ProductImage from "@/components/client/ProductDetails/ProductImage";
import Image from "next/image";
import {
  calculateProductDiscount,
  convertInInr,
} from "@/utils/productDiscountCalculate";
import ProductDetailsRightSide from "@/components/client/ProductDetails/ProductDetailsRightSide";
import Faq from "@/components/client/FAQ/Faq";
// import Product from "@/components/client/HomePage/ProductsRange/Product";

interface ProductDetailPageProps {
  params: Promise<{ productName: string }>;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = async ({
  params,
}) => {
  const { productName } = await params;

  const faqArray = [
    {
      id: 0,
      title: "Will This Work on Acne-Prone Skin?",
      desc: "Yes, the Multani Mitti Face Wash is formulated with Multani Mitti &amp; Bulgarian Rose which is proven to reduce acne and hydrate skin. We recommend you incorporate the Multani Mitti Range into your skincare regimen to see the desired results.",
    },
    {
      id: 1,
      title: "Can Men Use It?",
      desc: "Yes, absolutely. Mamaearth Multani Mitti Face Wash can be used by anyone above the age of 18 years.",
    },
    {
      id: 2,
      title: "Is It Suitable for All Skin Types?",
      desc: "Mamaearth Multani Mitti Face Wash is crafted with natural ingredients and is suitable for all skin types.",
    },
    {
      id: 3,
      title: "Will It Make My Skin Dry?",
      desc: "No. Mamaearth Multani Mitti Face Wash contains Bulgarian Rose, which helps keep the skin hydrated and nourished.",
    },
  ];

  // console.log("productsArray - ", productsArray[0]);

  return (
    <>
      <Header />

      <SubHeader />

      <section className="px-24 py-4 space-y-4 bg-white font-sans relative">
        <div>
          {[productsArray[0]].map((product, idx) => {
            return (
              <div key={idx} className="flex flex-row gap-2">
                <div>
                  {/* <h1>Product Images </h1> */}
                  <ProductImage images={product?.images} />
                </div>

                <div>
                  <ProductDetailsRightSide product={product} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-2 fixed top-[280px] right-[50px] bg-white z-10 w-[280px]  ">
          <div className="border p-2 space-y-2 ">
            <h6 className="text-lg font-semibold">Available Offers</h6>
            <p>Get 2 Best Sellers Free</p>
          </div>

          <div className="border p-2 space-y-2">
            <p className="text-base text-[#59A30E] font-semibold ">
              Special Price
            </p>
            <div className="flex flex-row justify-start items-center gap-3 ">
              <p className="text-2xl text-[--text-dark-shade] font-semibold">
                {calculateProductDiscount(
                  productsArray[0]?.mrp,
                  productsArray[0]?.discountInPercent
                )}
                .00
              </p>
              <p className="text-base text-[--text--light-gray] font-semibold line-through">
                {convertInInr(productsArray[0]?.mrp)}
              </p>
              <p className="text-2xl text-red-600 font-semibold">
                {productsArray[0]?.discountInPercent}% off
              </p>
            </div>
            <p className="text-xs font-normal mt-[20px]" >Inclusive of all Taxes</p>
            <p className="text-base text-[#3D3D3D] font-normal">Single</p>

            <div className="flex flex-row gap-2">
              <p className="text-base text-[#3D3D3D] font-normal">Quantity</p>
              <div className="flex flex-row gap-2 border">
                <p>-</p>
                <p>10</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pr-64 space-y-5 ">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium">Product Description</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
              reprehenderit dolor ex reiciendis quod, quae ea iste libero quam
              eligendi nostrum facilis saepe harum qui sunt iure nisi itaque
              dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iure praesentium sed laudantium nam non ad facilis! Corporis modi
              atque laudantium, odit odio itaque quasi, rerum quam vero ipsam,
              placeat sequi.
            </p>
          </div>

          <div className="space-y-5">
            <h6 className="text-lg font-bold">FAQs</h6>

            {faqArray.map((data, idx) => {
              return (
                <div key={idx}>
                  <Faq
                    iconColor={"#00afef"}
                    iconSize={35}
                    title={data?.title}
                    desc={data?.desc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
