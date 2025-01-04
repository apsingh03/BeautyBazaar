import { Header } from "@/components/client/Header";
import BannerCarousel from "@/components/client/HomePage/BannerCarousel";
import { SubHeader } from "@/components/client/SubHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTags } from "react-icons/bs";
import { CiMemoPad } from "react-icons/ci";
import { productsArray } from "../../utils/ProductsArray";
import { TbReceiptRupee } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const Checkout = () => {
  return (
    <>
      <header className="shadow-2xl shadow-black ">
        <div
          className="sticky top-0 z-20 p-2 flex flex-col items-center  sm:flex-row sm:justify-between gap-3 sm:items-start
       bg-red-600 sm:bg-black md:bg-yellow-600 lg:bg-blue-700  xl:bg-green-700 text-white text-sm "
        >
          <p>Asia's 1st Brand with Made Safe Certified Products</p>
          <p>Get 3 Products @FLAT899 on selected products </p>
        </div>

        <div className="flex flex-col md:flex-row justify-start gap-10 md:gap-56 items-center py-5 px-3 sm:px-10 md:px-14 lg:px-20 xl:px-24 bg-[--white]">
          <div>
            <Link href={"/"}>
              <span className="font-bold text-xl text-[--light-blue]">
                Beauty
              </span>
              <span className="font-bold text-xl text-[--secondary-color]">
                Baazar
              </span>
            </Link>
          </div>

          <div className="flex flex-row items-center gap-3 text-base font-semibold text-[--dark-gray] ">
            <p className="text-[--primary-color] relative ">
              Cart
              <span className="w-[25px] h-[3px] bg-[--primary-color] absolute rounded-md top-full left-1"></span>{" "}
            </p>
            <div className="w-[50px] h-[2px] bg-[#ddd] rounded-xl relative ">
              <span className="absolute right-0 -top-[1px] w-[4px] h-[4px] bg-[#ddd] rounded-full"></span>
              <span className="absolute left-0 -top-[1px] w-[4px] h-[4px] bg-[#ddd] rounded-full"></span>
            </div>
            <p>Addresses</p>
            <div className="w-[50px] h-[2px] bg-[#ddd] rounded-xl relative ">
              <span className="absolute right-0 -top-[1px] w-[4px] h-[4px] bg-[#ddd] rounded-full"></span>
              <span className="absolute left-0 -top-[1px] w-[4px] h-[4px] bg-[#ddd] rounded-full"></span>
            </div>
            <p>Payment</p>
          </div>
        </div>
      </header>

      <div className="bg-[--lightGray-bg-color] px-3 sm:px-14 md:px-16 lg:px-20 xl:px-32 py-8 space-y-3">
        <div className="space-y-2">
          <div className="flex flex-row gap-2 ">
            <div>
              <BsTags />
            </div>
            <p className="text-sm font-semibold ">
              <span></span>
              Available offers for you (2)
            </p>
          </div>

          <p className="text-[10px] font-normal ml-6">
            All coupons are applicable on MRP
          </p>
        </div>

        <div className="flex flex-row gap-2">
          {["", ""].map((_, idx) => {
            return (
              <div
                className="border border-[--border-color] px-3 py-2 bg-white rounded-lg space-y-3 relative"
                key={idx}
              >
                {/* Left Circle */}
                <span className="w-[20px] h-[20px] bg-[#F4F6F8] rounded-full absolute left-[-11px] top-[63%] -translate-y-1/2 border-r border-[--border-color] overflow-hidden"></span>

                {/* Right Circle */}
                <span className="w-[20px] h-[20px] bg-[#F4F6F8] rounded-full absolute right-[-11px] top-1/2 -translate-y-1/2 border-l border-[--border-color] overflow-hidden"></span>

                {/* Text Section */}
                <div className="relative z-10">
                  <p className="font-semibold text-sm text-[--text-dark-shade]">
                    Buy 2 Get 3 Bestsellers FREE
                  </p>
                  <div className="flex flex-row justify-between text-sm font-medium text-[--text-gray1]">
                    <p className="text-sm font-medium">View details</p>
                    <p>B2G3</p>
                  </div>
                </div>

                {/* Dotted Line */}
                <div className="border border-dashed border-[--text-gray1] absolute top-1/2 left-[9px] right-[9px] -translate-y-1/2 z-0"></div>

                {/* Save and Apply Section */}
                <div className="flex flex-row justify-between text-xs font-medium">
                  <p className="text-[#59A30E]">Save ₹297 with this offer</p>
                  <button className="text-[--primary-color]">Apply</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row  py-0">
        {/* px-3 sm:px-14 md:px-16 lg:px-28 xl:px-32 */}
        <div className="px-3 sm:px-14 md:px-16 lg:px-28 xl:px-32 py-5 md:py-10 space-y-5 w-[100%] md:w-[60%] border-r">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-2">
              <CiMemoPad size={30} color="#1d1d1d" />
              <p className="text-sm font-medium text-[--text-dark-shade]">
                Cart details
              </p>
            </div>

            <div className=" flex flex-row gap-2 text-sm">
              <p className="font-light text-[#505050]  ">
                Total items : <span className="font-semibold">4 </span>
              </p>
              <p className="font-light text-[#505050] "> {" | "} </p>
              <p className="font-light text-[#505050]">
                To pay : <span className="font-semibold">₹1,193.20</span>
              </p>
            </div>
          </div>

          {["", "", ""].map((_, idx) => {
            return (
              <div className="flex flex-row justify-between items-center border-b mb-5">
                <div className="flex flex-row gap-5 pb-3 ">
                  <div className="border">
                    <Image
                      src={
                        "https://images.mamaearth.in/catalog/product/w/i/with-ingredient_4_1.jpg?format=auto&width=300&height=300"
                      }
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt="product"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <p className="text-sm font-medium">
                      Natural Mosquito Repellent Gel - 100 ml
                    </p>
                    <div className="flex flex-row gap-3 text-xs text-[--text-dark-shade] ">
                      <p className="font-semibold">₹ 449 </p>
                      <p className="font-light">₹ 499</p>
                      <p className=" text-[red] ">
                        {"( "}10 % Off {" )"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <button className="bg-white border hover:bg-gray-300 text-gray-700 font-bold py-0 px-2 ">
                    -
                  </button>

                  <span className=" bg-gray-200  font-medium text-gray-800 w-8 text-center">
                    1
                  </span>

                  <button className="bg-white border hover:bg-gray-300 text-gray-700 font-bold py-0 px-2 ">
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-3 sm:px-14 md:px-16 lg:px-20 xl:px-24 py-5 md:py-10 space-y-5 w-[100%] md:w-[40%]">
          <div className="flex flex-row items-center gap-2">
            <TbReceiptRupee size={30} color="#1d1d1d" />
            <p className="text-sm font-medium text-[--text-dark-shade]">
              Price Summary
            </p>
          </div>

          <div className="space-y-3 font-sans ">
            <div className="flex flex-row justify-between gap-10 ">
              <p className="font-normal  text-sm ">Order Total</p>
              <p className="font-medium text-[--text-dark-shade] ">₹1,396.00</p>
            </div>
            <div className="flex flex-row justify-between gap-10 ">
              <p className="font-normal text-sm ">Items Discount</p>
              <p className="font-semibold text-[#59A30E]">₹140.00</p>
            </div>
            <div className="flex flex-row justify-between gap-10 ">
              <p className="font-normal text-sm ">Shipping</p>
              <p className="font-medium text-[--text-dark-shade] ">₹1,396.00</p>
            </div>

            <div className="flex flex-row justify-between gap-10 ">
              <p className="font-normal text-sm ">5% online payment discount</p>
              <p className="font-semibold text-[#59A30E]">-₹62</p>
            </div>

            <div className="border-t  border-slate-300"></div>

            <div className="flex flex-row justify-between gap-10 ">
              <p className="font-semibold text-base ">To Pay</p>
              <p className="font-semibold text-base text-[--text-dark-shade] ">
                ₹1,193.20
              </p>
            </div>
          </div>

          <div>
            <div className="border-t border-l border-r pt-1 pl-1 pr-1 bg-white rounded-t-lg ">
              <div className=" flex flex-row items-center bg-[#EBF5E0] p-1 rounded-t-lg ">
                <TiTick size={16} color="green" />
                <p className=" text-sm font-medium ">
                  You are saving <span className="font-semibold">₹242.80</span>{" "}
                  on this order
                </p>
              </div>
            </div>

            <button className="border uppercase p-3 text-center w-full bg-[--primary-color] text-white  rounded-md">
              Add address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
