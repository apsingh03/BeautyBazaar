import Footer from "@/components/client/Footer";
import { Header } from "@/components/client/Header";
import { SubHeader } from "@/components/client/SubHeader";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";

const SavedCards = () => {
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
          <p className="text-xs font-normal">Your Saved Cards</p>
        </div>

        <div className="flex flex-row justify-between">
          <h6 className="text-xl font-semibold">Your Cards</h6>
        </div>

        <div className="p-5  ">
          <div className="flex flex-col  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={150}
              height={150}
              viewBox="-1.41 0 36.682 36.682"
            >
              <g id="SVGRepo_iconCarrier">
                <g
                  id="Group_8"
                  data-name="Group 8"
                  transform="translate(-918.829 -110.489)"
                >
                  <g id="Group_6" data-name="Group 6">
                    <rect
                      id="Rectangle_6"
                      width="26.809"
                      height="15.467"
                      fill="#fff1b6"
                      stroke="#333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      data-name="Rectangle 6"
                      rx="1.826"
                      transform="rotate(-44.743 623.843 -1050.532)"
                    ></rect>
                  </g>
                  <g
                    id="Group_7"
                    fill="#e8f7f9"
                    stroke="#333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    data-name="Group 7"
                  >
                    <rect
                      id="Rectangle_7"
                      width="26.809"
                      height="15.467"
                      data-name="Rectangle 7"
                      rx="1.826"
                      transform="rotate(-28.48 705.384 -1750.62)"
                    ></rect>
                    <path
                      id="Line_7"
                      d="M0 13.103 24.119 0"
                      data-name="Line 7"
                      transform="translate(922.505 116.462)"
                    ></path>
                    <path
                      id="Line_8"
                      d="M0 2.57 4.73 0"
                      data-name="Line 8"
                      transform="translate(941.938 123.618)"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>

            <p className="text-base font-medium">
              Once saved , your cards will visible here!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SavedCards;
