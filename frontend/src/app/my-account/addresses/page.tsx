import Footer from "@/components/client/Footer";
import { Header } from "@/components/client/Header";
import { SubHeader } from "@/components/client/SubHeader";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Addresses: React.FC = () => {
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
          <p className="text-xs font-normal">Your Addresses</p>
        </div>

        <div className="flex flex-row justify-between">
          <h6 className="text-xl font-semibold">Your Addresses</h6>
        </div>

        <div className="p-5  ">
          <div className="flex flex-col  items-center space-y-4 ">
            <div>
              <FaMapLocationDot size={60} color="#1D1D1D" />
            </div>

            <p className="text-base font-medium">No Address Available</p>

            <button className="text-center uppercase px-36 py-2 bg-[--primary-color] text-sm text-white  rounded-md">
              + add new address
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Addresses;
