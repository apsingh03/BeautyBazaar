"use client";

import React, { useState } from "react";

import { RxDashboard } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { boolean, number } from "yup";

const SideNavLeftSide = () => {
  const [isToggle, setisToggle] = useState<{ [key: number]: boolean }>({});

  const sideNavArray = [
    {
      id: 1,
      category: "Product Filters",
      title: "Filters",
      subMenu: [
        { name: "Create Parent", url: "parentFilter" },
        { name: "Create Child", url: "childFilter" },
      ],
    },
    {
      id: 2,
      category: "Product Menu",
      title: "Menu ",
      subMenu: [
        { name: "Create Parent", url: "parentMenu" },
        { name: "Create Child", url: "childMenu" },
      ],
    },

    {
      id: 3,
      category: "Category Brand",
      title: "Product Category Brand",
      subMenu: [
        { name: "Create Category Parent", url: "parentCategoryBrand" },
        { name: "Create Brand Child", url: "childCategoryBrand" },
      ],
    },
    {
      id: 4,
      category: "Product other Details",
      title: "Product Info",
      subMenu: [
        { name: "Listed Products", url: "listedProducts" },
        { name: "Category", url: "category" },
        { name: "Color", url: "color" },
        { name: "Fabrics", url: "fabrics" },
        { name: "Create Product", url: "addProduct" },
        { name: "Recycle Bin", url: "recycleBinProduct" },
      ],
    },
    {
      id: 5,
      category: "Orders Info",
      title: "Orders",
      subMenu: [{ name: "Placed Orders", url: "placedOrders" }],
    },
    {
      id: 6,
      category: "Frontend ",
      title: "Carousels Elements",
      subMenu: [
        {
          name: "Parent Banner Carousel",
          url: "bannerCarouselParent",
        },
        {
          name: "Child Banner Carousel",
          url: "bannerCarouselChild",
        },
        {
          name: "Parent Actress Carousel",
          url: "actressCarousel/parent",
        },
        {
          name: "Child Actress Carousel",
          url: "actressCarousel/child",
        },
        {
          name: "Parent Testimonial Carousel",
          url: "testimonial/parent",
        },
        {
          name: "Child Testimonial Carousel",
          url: "testimonial/child",
        },
        {
          name: "Four Images Banner",
          url: "fourImagesBanner",
        },
      ],
    },
  ];

  const handleIsToggle = (id: number) => {
    setisToggle((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="text-white px-5 py-0 flex flex-col">
      <Link
        href={"/admin/dashboard"}
        className="px-2 py-10 flex flex-row gap-2"
      >
        <div>
          <RxDashboard size={30} color="#fff" />
        </div>

        <h1 className="text-2xl">Admin Panel</h1>
      </Link>

      <div className="space-y-5">
        {sideNavArray.map((data, idx) => {
          return (
            <div className="space-y-1" key={idx}>
              <h3 className="text-sm font-medium text-[#8A99AF]">
                {data?.category}
              </h3>

              <div className="space-y-2">
                <div
                  className="flex flex-row justify-between cursor-pointer hover:bg-[#333a48] px-4 py-2 duration-300 ease-in-out rounded-md "
                  onClick={() => handleIsToggle(data?.id)}
                >
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <FaHome size={20} color="#fff" />
                    </div>

                    <div>
                      <p className="text-base font-medium text-[#DEE4EE]">
                        {data?.title}
                      </p>
                    </div>
                  </div>

                  <div>
                    {isToggle[data?.id] ? (
                      <MdOutlineKeyboardArrowUp size={20} color={"#fff"} />
                    ) : (
                      <MdOutlineKeyboardArrowDown size={20} color={"#fff"} />
                    )}
                  </div>
                </div>

                {/* Submenu */}
                {isToggle[data?.id] && (
                  <div className="pl-7 flex flex-col space-y-2 font-medium text-sm">
                    {data?.subMenu.map((submenuItem, subIdx) => (
                      <Link
                        href={submenuItem?.url || "#"}
                        className="text-[#8a99af] hover:text-[#fff]"
                        key={subIdx}
                      >
                        {submenuItem?.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavLeftSide;
