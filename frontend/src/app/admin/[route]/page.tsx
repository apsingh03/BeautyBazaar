"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For app directory, use "next/navigation"

import SideNavLeftSide from "@/components/admin/SideNavLeftSide";
import AdminDashboard from "@/components/admin/RightSideComponents/AdminDashboard";
import AdminHeader from "@/components/admin/AdminHeader";

import { MdOutlineChevronRight } from "react-icons/md";
import Link from "next/link";
import AdminParentFilter from "@/components/admin/RightSideComponents/Filter/AdminParentFilter";
import AdminChildFilter from "@/components/admin/RightSideComponents/Filter/AdminChildFilter";
import AdminParentMenu from "@/components/admin/RightSideComponents/Menu/AdminParentMenu";
import AdminChildMenu from "@/components/admin/RightSideComponents/Menu/AdminChildMenu";
import AdminParentBannerCarousel from "@/components/admin/RightSideComponents/BannerCarousel/AdminParentBannerCarousel";
import AdminChildBannerCarousel from "@/components/admin/RightSideComponents/BannerCarousel/AdminChildBannerCarousel";

// interface AdminJunctionPageProps {
//   params: Promise<{ route: string }>;
// }

interface AdminJunctionPageProps {
  params: { route: string };
}

const AdminJunction: React.FC<AdminJunctionPageProps> = ({ params }) => {
  // const { route } = await params;

  const [isToggleSideNav, setIsToggleSideNav] = useState(false);
  const [currentComponent, setCurrentComponent] =
    useState<React.ReactNode>(null);

  async function setComponenetAccordingToRoute() {
    try {
      const { route } = (await params) || {}; // Handle undefined params

      if (!route) {
        setCurrentComponent(
          <div className="bg-[#000] text-white capitalize p-4 text-center text-base">
            Invalid route
          </div>
        );
        return;
      }

      // Map slugs to components
      const componentMap: { [key: string]: React.ReactNode } = {
        dashboard: <AdminDashboard />,
        parentFilter: <AdminParentFilter />,
        childFilter: <AdminChildFilter />,
        parentMenu: <AdminParentMenu />,
        childMenu: <AdminChildMenu />,
        bannerCarouselParent: <AdminParentBannerCarousel />,
        bannerCarouselChild: <AdminChildBannerCarousel />,
      };

      // Dynamically set the component based on the route
      setCurrentComponent(
        componentMap[route] || (
          <div className="bg-[#000] text-white capitalize p-4 text-center text-base">
            Page not found
          </div>
        )
      );
    } catch (error) {
      // console.error("Error fetching route:", error);
      setCurrentComponent(
        <div className="bg-[#000] text-white capitalize p-4 text-center text-base">
          Something went wrong
        </div>
      );
    }
  }

  useEffect(() => {
    setComponenetAccordingToRoute();
  }, [params]);

  return (
    <div className="flex flex-row  font-sans ">
      <div
        className={`${
          isToggleSideNav ? "hidden" : "block"
        } w-full  md:w-1/4  bg-[--bg-admin] max-h-screen overflow-y-scroll no-scrollbar duration-300 ease-linear scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-700`}
      >
        <SideNavLeftSide />
      </div>

      <div
        className={` ${
          isToggleSideNav ? "w-full" : "md:w-3/4 "
        }  w-full max-h-screen overflow-y-scroll   scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-gray-800 `}
      >
        {/* Header */}
        <AdminHeader
          setIsToggleSideNav={setIsToggleSideNav}
          isToggleSideNav={isToggleSideNav}
        />

        {/* Body */}
        <section className="px-4 py-6  bg-[#F1F5F9] flex flex-col gap-3">
          {/* Route Navigation */}
          <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div className="grow">
              <h5 className="text-16">BeautyBazaar</h5>
            </div>
            <ul className="flex items-center gap-2 text-sm font-normal shrink-0">
              <li>
                <Link
                  href="/admin"
                  className="text-slate-400 dark:text-zink-200"
                >
                  Admin
                </Link>
              </li>
              <li>
                <MdOutlineChevronRight size={20} color="#1D1D1D" />
              </li>
              <li className="text-slate-700 dark:text-zink-100 capitalize"></li>
            </ul>
          </div>

          {/* Body  */}
          {currentComponent}
        </section>
      </div>
    </div>
  );
};

export default AdminJunction;
