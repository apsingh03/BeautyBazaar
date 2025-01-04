import Link from "next/link";
import React from "react";

export const SubHeader: React.FC = () => {
  const menu = [
    {
      id: 0,
      title: "Home",
      routeLink: "/",
      subMenu: [
        { id: 0, title: "Face wash", routeLink: "" },
        { id: 1, title: "Sunscreen", routeLink: "" },
        { id: 2, title: "Face Serum", routeLink: "" },
        { id: 3, title: "Face Cream", routeLink: "" },
      ],
    },
    {
      id: 1,
      title: "Face",
      routeLink: "/product-category/skin",
      subMenu: [
        { id: 0, title: "Shampoo", routeLink: "" },
        { id: 1, title: "Hair oil", routeLink: "" },
        { id: 2, title: "conditioner", routeLink: "" },
      ],
    },
    {
      id: 2,
      title: "Hair",
      routeLink: "/product-category/hair",
      subMenu: [
        { id: 0, title: "Shampoo", routeLink: "" },
        { id: 1, title: "Hair oil", routeLink: "" },
        { id: 2, title: "conditioner", routeLink: "" },
      ],
    },
    {
      id: 3,
      title: "MakeUp",
      routeLink: "/product-category/makeup-products",
      subMenu: [
        { id: 0, title: "Lipstic", routeLink: "" },
        { id: 1, title: "Foundation", routeLink: "" },
        { id: 2, title: "Kajal", routeLink: "" },
      ],
    },
    {
      id: 0,
      title: "body",
      routeLink: "/product-category/body",
      subMenu: [
        { id: 0, title: "Body Lotion", routeLink: "" },
        { id: 1, title: "Soap", routeLink: "" },
        { id: 2, title: "Body Wash", routeLink: "" },
      ],
    },
    {
      id: 0,
      title: "baby",
      routeLink: "/product-category/for-babies",
      subMenu: [
        { id: 0, title: "Baby Shampoo ", routeLink: "" },
        { id: 1, title: "Baby Lotion", routeLink: "" },
      ],
    },
    {
      id: 0,
      title: "combo",
      routeLink: "/product-category/combos",
      subMenu: [
        { id: 0, title: "Combos", routeLink: "" },
        { id: 1, title: "Kits", routeLink: "" },
      ],
    },
  ];

  return (
    <div className=" sticky top-12 z-20 flex flex-row justify-between py-5 px-3 sm:px-10 md:px-16 lg:px-20 xl:px-24 bg-[--white] border-t border-[--border-color] shadow-md  ">
      {menu.map((data, idx) => {
        const isLast = idx === menu.length - 1 || idx === menu.length - 2; // Check if it's the last menu item
        return (
          <div key={idx} className="relative group">
            <Link
              href={data?.routeLink}
              className="text-sm font-semibold font-sans uppercase text-[--medium-gray]"
            >
              {data?.title}
            </Link>

            {/* <div className="  bg-white z-10 p-5 absolute top-full left-0 hidden group-hover:flex flex-row justify-between gap-8 border-t-2 border-[--primary-color]"> */}
            <div
              className={`min-w-[350px] bg-white z-10 p-5 absolute top-full ${
                isLast ? "right-0" : "left-0"
              } hidden group-hover:flex flex-row justify-between gap-8 border-t-2 border-[--primary-color] max-w-screen overflow-hidden`}
            >
              {/* Explore Section */}
              <div className="space-y-3 flex flex-col">
                <p className="text-base font-medium text-[--text-dark-shade]">
                  Explore
                </p>
                <div className="text-sm text-[--medium-gray] font-medium flex flex-col gap-1">
                  <Link href={""} className="hover:text-[--dark-gray]">
                    New Launches
                  </Link>
                  <Link href={""} className="hover:text-[--dark-gray]">
                    Best Sellers
                  </Link>
                  <Link href={""} className="hover:text-[--dark-gray]">
                    Combos
                  </Link>
                </div>
              </div>

              {/* Home Section */}
              <div className="space-y-3 flex flex-col">
                <p className="text-base font-medium text-[--text-dark-shade] capitalize">
                  {data?.title}
                </p>
                <div className="text-sm text-[--medium-gray] font-medium flex flex-col gap-1">
                  {data.subMenu?.map((subMenu, idx) => {
                    return (
                      <Link
                        key={idx}
                        href={""}
                        className="hover:text-[--dark-gray]"
                      >
                        {subMenu?.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* See All Section */}
              <div className="flex items-start">
                <Link href={""} className="text-[--primary-color]">
                  See All
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
