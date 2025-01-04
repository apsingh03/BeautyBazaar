"use client";
import React, { useState } from "react";

import { AiOutlineTruck } from "react-icons/ai";
import Wallet from "../../assets/svg/Wallet";
import Truck from "../../assets/svg/Truck";
import Image from "next/image";
import Link from "next/link";

import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const footerData = [
    {
      id: 0,
      title: "useful links",
      child: [
        { id: 0, title: "Privacy Policy", routeLink: "" },
        { id: 1, title: "Returns", routeLink: "" },
        { id: 2, title: "Terms & Condition", routeLink: "" },
        { id: 3, title: "We're Safe", routeLink: "" },
        { id: 4, title: "Contact Us", routeLink: "" },
        { id: 5, title: "", routeLink: "" },
      ],
    },
    {
      id: 1,
      title: "Categories",
      child: [
        { id: 0, title: "Baby", routeLink: "" },
        { id: 1, title: "beauty", routeLink: "" },
        { id: 2, title: "hair", routeLink: "" },
        { id: 3, title: "face", routeLink: "" },
        { id: 4, title: "body", routeLink: "" },
        { id: 5, title: "makeup", routeLink: "" },
        { id: 6, title: "ingredients", routeLink: "" },
      ],
    },
    {
      id: 2,
      title: "my account",
      child: [
        { id: 0, title: "account", routeLink: "" },
        { id: 1, title: "orders", routeLink: "" },
        { id: 2, title: "addresses", routeLink: "" },
      ],
    },
  ];

  return (
    <div className="md:py-5   md:px-16 lg:px-20 xl:px-24 ">
      <div className="hidden  md:flex flex-row  border">
        {/* First Section */}
        <div className=" p-10 border-r flex flex-col items-center space-y-2 text-[--dark-gray] ">
          <div>
            <Truck />
          </div>

          <p className="text-sm font-semibold">Free Shipping</p>

          <p className="text-xs font-normal">On Orders Above ₹399</p>
        </div>

        {/* Second Section */}
        <div className="flex flex-row items-center justify-between flex-1 px-10 text-[--dark-gray]">
          {/* Left Content */}
          <div className="flex flex-col items-center space-y-2 ">
            <div>
              <Wallet />
            </div>

            <p className="text-sm font-semibold">COD Available</p>

            <p className="text-xs font-normal">@ $40 Per Order</p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-3">
            <p className=" md:text-base lg:text-lg font-semibold">
              Have Queries or Concerns?
            </p>
            <button className="uppercase border px-5 py-2 rounded-md border-[--primary-color] text-[--primary-color] font-medium">
              contact us
            </button>
          </div>
        </div>
      </div>

      <div className="block  md:hidden  space-y-5  ">
        {/* First Section */}
        <div className=" ">
          <div className="bg-[#F8F8F8]  flex flex-row justify-between py-3 px-10">
            <div className=" flex flex-row items-center gap-2 space-y-2 text-[--dark-gray] ">
              <div>
                <Truck />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold">Free Shipping</p>

                <p className="text-xs font-normal">On Orders Above ₹XXX</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 space-y-2 ">
              <div>
                <Wallet />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold">COD Available</p>

                <p className="text-xs font-normal">₹XXX Per Order</p>
              </div>
            </div>
          </div>
        </div>

        <div className="  flex flex-col gap-3 items-center">
          <p className=" md:text-base lg:text-lg font-semibold">
            Have Queries or Concerns?
          </p>
          <button className="uppercase border px-5 py-2 rounded-md border-[--primary-color] text-[--primary-color] font-medium">
            contact us
          </button>
        </div>

        {/* <div className="flex flex-row items-center justify-between flex-1 px-10 text-[--dark-gray]">
       
         
        </div> */}
      </div>

      <div className="md:border py-5 px-10 space-y-3 ">
        <p className="block md:hidden text-center text-sm font-medium uppercase">
          {" "}
          Pay Using{" "}
        </p>
        <p className="hidden md:block text-lg font-medium uppercase">
          {" "}
          Payment{" "}
        </p>
        <p className="hidden md:block text-base font-normal text-[--secondary-color] ">
          100% Payment Protection , Easy Return Policy
        </p>
        <Image
          src="https://images.mamaearth.in/png/web-payments.png"
          height={100}
          width={600}
          style={{ objectFit: "contain" }}
          alt="payment options"
          loading="lazy"
        />
        <div></div>
      </div>

      <div className="bg-white hidden md:grid grid-cols-3 py-5 px-10 border ">
        {footerData.map((item, index) => (
          <div className="space-y-5" key={index}>
            <h6 className="uppercase text-md font-medium text-[--dark-gray] ">
              {item?.title}
            </h6>

            <div className="">
              {item?.child.map((child, idx) => {
                return (
                  <div key={idx} className="py-1 ">
                    <Link
                      href={child?.routeLink}
                      className="capitalize text-base font-normal text[--medium-gray] hover:text-[#027DAC]  "
                    >
                      {child?.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className=" bg-white block md:hidden ">
        {footerData.map((item, index) => (
          <div key={index} className="mb-1">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-2 border-b border-b-slate-300 rounded-lg focus:outline-none"
            >
              <h6 className="uppercase text-md font-medium text-[--dark-gray] ">
                {item?.title}
              </h6>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                color="#00afef"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index &&
              item?.child.map((child, idx) => {
                return (
                  <div key={idx} className="py-1 px-10">
                    <Link
                      href={child?.routeLink}
                      className="capitalize text-base font-normal text-[--text-dark-shade] hover:text-[#027DAC]  "
                    >
                      {child?.title}
                    </Link>
                  </div>
                );
              })}
          </div>
        ))}
      </div>

      <div className="md:border p-5 flex flex-col justify-center items-center  space-y-5 ">
        <div className="flex flex-row gap-5">
          <TiSocialFacebook color="#000" size={30} />
          <TiSocialTwitter color="#000" size={30} />
          <TiSocialLinkedin color="#000" size={30} />
        </div>

        <div className=" flex flex-row gap-5">
          <Image
            src="https://images.mamaearth.in/wysiwyg/PLAYSTORE18Apr.png"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
            alt="play store"
            loading="lazy"
          />
          <Image
            src="https://images.mamaearth.in/wysiwyg/APPSTORE18Apr.png"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
            alt="apple store"
            loading="lazy"
          />
        </div>
      </div>

      <div className="border p-5 text-center text-base font-medium text-[--text-dark-shade] ">
        <span>© 2024 Honasa Consumer Limited. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
