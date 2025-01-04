import Footer from "@/components/client/Footer";
import { Header } from "@/components/client/Header";
import { SubHeader } from "@/components/client/SubHeader";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";

const Orders: React.FC = () => {
  return (
    <>
      <Header />

      <SubHeader />

      <section className="px-24 py-5 space-y-10 font-sans ">
        <div className="flex flex-row gap-1 items-center text-[--text-dark-shade]">
          <Link href={"/my-account/"} className="text-xs font-normal">
            Home
          </Link>
          <div>
            <MdKeyboardArrowRight size={16} color="#00afef" />
          </div>
          <Link href={"/my-account/"} className="text-xs font-normal">
            My Account
          </Link>
          <div>
            <MdKeyboardArrowRight size={16} color="#00afef" />
          </div>
          <p className="text-xs font-normal">Your Orders</p>
        </div>

        <div className="flex flex-row justify-between">
          <h6 className="text-xl font-semibold">Your Orders</h6>

          <div className="border text-[#00afef] flex flex-row gap-2 items-center p-2">
            <IoFilterOutline />
            <p className="text-base font-medium">Filter</p>
          </div>
        </div>

        <div className="p-5  ">
          <div className="flex flex-col  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              id="Layer_1"
              width="150"
              height="150"
              fill="#000"
              stroke="#000"
              version="1.1"
              viewBox="0 0 495.2 495.2"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#D38C0D"
                  d="M325.6 224.4 495.2 126 325.6 28.4l-168.8 99.2z"
                ></path>
                <g fill="#EFBB67">
                  <path d="m170.4 224.4 168-97.6-168-98.4L0 126.8z"></path>
                  <path d="m416 368.4-168 98.4-168-98.4v-196L248 74l168 98.4z"></path>
                </g>
                <path fill="#D38C0D" d="m248 74 168 98.4v196l-168 98.4"></path>
                <path
                  fill="#EFBB67"
                  d="M326.4 314.8 495.2 218l-169.6-98.4L156 218z"
                ></path>
                <path
                  fill="#D38C0D"
                  d="m170.4 316.4 168.8-99.2-168.8-97.6L0 218z"
                ></path>
                <path
                  fill="#704A0E"
                  d="M248.8 270.8 416 172.4 248.8 74 78.4 172.4z"
                ></path>
                <path fill="#513307" d="M248.8 270.8 416 172.4 248.8 74"></path>
                <path
                  fill="#2D1C05"
                  d="m248.8 270.8 36-21.6-36-20.8-36 20.8z"
                ></path>
                <g fill="#0DD396">
                  <path d="m368 379.6 40-23.2v-12.8l-40 23.2zM368 356.4l40-23.2v-12.8l-40 23.2zM368 333.2l40-23.2v-13.6l-40 24z"></path>
                </g>
              </g>
            </svg>
            <p className="text-base font-medium">No Orders Placed yet!</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Orders;
