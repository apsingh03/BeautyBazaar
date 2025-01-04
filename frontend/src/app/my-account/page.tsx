import Footer from "@/components/client/Footer";
import { Header } from "@/components/client/Header";
import { SubHeader } from "@/components/client/SubHeader";
import Link from "next/link";
import React from "react";
import { BsBox } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { LiaCreativeCommonsShare } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";

const UserDashboard: React.FC = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <section className="py-11 px-28 space-y-2 font-sans">
        <div>
          <h6 className="text-lg font-semibold">Welcome, ajay singh!</h6>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2">
            <p className="text-sm font-normal text-[--text--light-gray]">
              Email:{" "}
            </p>
            <p className="text-sm font-medium text-[ --text-dark-shade]  ">
              xxxxxxxx@gmail.com
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <p className="text-sm font-normal text-[--text--light-gray]">
              Phone:{" "}
            </p>
            <p className="text-sm font-medium text-[ --text-dark-shade]  ">
              xxx xxx xxxx
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <p className="text-sm font-normal text-[--text--light-gray]">
              Gender:{" "}
            </p>
            <p className="text-sm font-medium text-[ --text-dark-shade]  ">
              XYZ
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <p className="text-sm font-normal text-[--text--light-gray]">
              Dob:{" "}
            </p>
            <p className="text-sm font-medium text-[ --text-dark-shade]  ">
              XX / XX / XXXX
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4  items-center gap-2 py-2">
          <Link href={"/order-track"}>
            <div className="flex flex-row border items-center px-3 gap-3 rounded-xl  h-[80px] w-[250px] cursor-pointer ">
              {/* h-[50px] w-[50px] */}
              <div className=" rounded-full p-3 bg-[--lightGray-bg-color] ">
                <BsBox size={25} color="#5C5C5C" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-[--medium-gray]">
                  Track Order
                </p>
                <p className="text-xs font-normal text-[--text-dark-shade]">
                  Track your order
                </p>
              </div>
            </div>
          </Link>
          <Link href="/my-account/orders">
            <div className="flex flex-row border items-center px-3 gap-3 rounded-xl h-[80px] w-[250px] cursor-pointer ">
              {/* h-[50px] w-[50px] */}

              <div className=" rounded-full p-3 bg-[--lightGray-bg-color] ">
                <BsBox size={25} color="#5C5C5C" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-[--medium-gray]">
                  Your Orders
                </p>
                <p className="text-xs font-normal text-[--text-dark-shade]">
                  Track , Returns or buy things again
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/my-account/addresses"}>
            <div className="flex flex-row border items-center px-3 gap-3 rounded-xl h-[80px] w-[250px] cursor-pointer ">
              {/* h-[50px] w-[50px] */}
              <div className=" rounded-full p-3 bg-[--lightGray-bg-color] ">
                <IoLocationOutline size={25} color="#5C5C5C" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-[--medium-gray]">
                  Addresses
                </p>
                <p className="text-xs font-normal text-[--text-dark-shade]">
                  Edit addresses for orders and gifts
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/my-account/savedCards"}>
            <div className="flex flex-row border items-center px-3 gap-3 rounded-xl h-[80px] w-[250px] cursor-pointer ">
              {/* h-[50px] w-[50px] */}
              <div className=" rounded-full p-3 bg-[--lightGray-bg-color] ">
                <MdOutlinePayment size={25} color="#5C5C5C" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-[--medium-gray]">
                  Payment Modes
                </p>
                <p className="text-xs font-normal text-[--text-dark-shade]">
                  Your Saved UPI's Cards and more
                </p>
              </div>
            </div>
          </Link>

          <div className="flex flex-row border items-center px-3 gap-3 rounded-xl h-[80px] w-[250px]  cursor-pointer">
            {/* h-[50px] w-[50px] */}
            <div className=" rounded-full p-3 bg-[--lightGray-bg-color] ">
              <LiaCreativeCommonsShare size={25} color="#5C5C5C" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium text-[--medium-gray]">
                Referrals
              </p>
              <p className="text-xs font-normal text-[--text-dark-shade]">
                Refer and Earn Money
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UserDashboard;
