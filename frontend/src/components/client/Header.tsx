import React from "react";
import { IoIosSearch } from "react-icons/io";
import { LuCircleUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";

export const Header: React.FC = () => {
  return (
    <>
      <div
        className=" z-20 px-2 py-1 flex flex-col items-center  sm:flex-row sm:justify-between gap-3 sm:items-start
       bg-red-600 sm:bg-black md:bg-yellow-600 lg:bg-blue-700  xl:bg-green-700 text-white text-sm "
      >
        <p>Asia's 1st Brand with Made Safe Certified Products</p>
        <p>Get 3 Products @FLAT899 on selected products </p>
      </div>

      <header className=" sticky top-0 z-20 flex flex-row justify-between items-center py-2 px-3 sm:px-10 md:px-14 lg:px-20 xl:px-24 bg-[--white]">
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
        <div className="relative  hidden sm:block sm:w-2/5 md:w-2/5 lg:w-1/2 h-full rounded-2xl">
          {/* <span className="sr-only">Search</span> */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <IoIosSearch color="#333333" size={18} />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
          <span className="absolute inset-y-0 right-0 flex items-center px-4 bg-[--primary-color] text-white rounded-md">
            <IoIosSearch color="#ffff" size={18} />
            <span className="ml-1 font-medium text-sm  ">Search</span>
          </span>
        </div>

        <div className=" flex flex-row sm:flex-row md:flex-row gap-3 sm:gap-2 md:gap-1 lg:gap-3 items-center">
          <div
            className=" flex flex-row items-center gap-1 cursor-pointer"
            title="Admin Panel"
          >
            <RiAdminLine color="#00AFEF" size={22} />
            <p className="text-sm font-medium text-black hidden md:block  ">
              Admin Panel
            </p>
          </div>

          <div
            className=" flex flex-row items-center gap-1 cursor-pointer group relative  "
            title="Login"
          >
            <LuCircleUser color="#00AFEF" size={22} />
            <p className=" text-sm font-medium text-black hidden md:block  ">
              Hello, Login
            </p>

            <div
              className="space-y-5  hidden group-hover:block absolute top-full -left-10 bg-white justify-center z-20 py-2 px-1
            border-t-2 border-[#00afef] divide-y shadow-2xl 
            "
            >
              <div className="flex flex-row gap-5 items-center">
                <div>
                  <FaRegUser size={18} color="#00afef" />
                </div>
                <p className="text-sm font-medium ">Your Profile</p>
              </div>

              <div className="flex flex-row gap-5 items-center">
                <div>
                  <FaRegUser size={18} color="#00afef" />
                </div>
                <p className="text-sm font-medium ">Your Orders</p>
              </div>

              <div className="flex flex-row gap-5 items-center">
                <div>
                  <FaRegUser size={18} color="#00afef" />
                </div>
                <p className="text-sm font-medium "> Saved Cards</p>
              </div>

              <div className="flex flex-row gap-5 items-center">
                <div>
                  <FaRegUser size={18} color="#00afef" />
                </div>
                <p className="text-sm font-medium ">Contact Us</p>
              </div>
            </div>
          </div>

          <div className="" title="Cart">
            <Link
              href="/checkout"
              className="flex flex-row items-center gap-1 cursor-pointer"
            >
              <IoCartOutline color="#00AFEF" size={22} />
              <p className=" text-sm font-medium text-black hidden md:block  ">
                Cart
              </p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
