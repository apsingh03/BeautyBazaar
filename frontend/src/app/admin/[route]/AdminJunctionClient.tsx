"use client";

import AdminParentFilter from "@/components/admin/RightSideComponents/Filter/AdminParentFilter";
import AdminChildFilter from "@/components/admin/RightSideComponents/Filter/AdminChildFilter";
import AdminParentMenu from "@/components/admin/RightSideComponents/Menu/AdminParentMenu";
import AdminChildMenu from "@/components/admin/RightSideComponents/Menu/AdminChildMenu";
import AdminParentBannerCarousel from "@/components/admin/RightSideComponents/BannerCarousel/AdminParentBannerCarousel";
import AdminChildBannerCarousel from "@/components/admin/RightSideComponents/BannerCarousel/AdminChildBannerCarousel";
import { useState, useEffect } from "react";
import AdminDashboard from "@/components/admin/RightSideComponents/AdminDashboard";
import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import AdminHeader from "@/components/admin/AdminHeader";
import SideNavLeftSide from "@/components/admin/SideNavLeftSide";
// Import your sub-components as needed
// import AdminDashboard from '...';
// import AdminParentFilter from '...';
// etc.

interface AdminJunctionClientProps {
  params: { route: string };
}

const AdminJunctionClient: React.FC<AdminJunctionClientProps> = ({
  params,
}) => {
  const [isToggleSideNav, setIsToggleSideNav] = useState(false);
  const [currentComponent, setCurrentComponent] =
    useState<React.ReactNode>(null);

  function setComponentAccordingToRoute() {
    try {
      const { route } = params || {};

      if (!route) {
        setCurrentComponent(
          <div className="bg-[#000] text-white capitalize p-4 text-center text-base">
            Invalid route
          </div>
        );
        return;
      }

      // Map route slugs to components
      const componentMap: { [key: string]: React.ReactNode } = {
        dashboard: <AdminDashboard />,
        parentFilter: <AdminParentFilter />,
        childFilter: <AdminChildFilter />,
        parentMenu: <AdminParentMenu />,
        childMenu: <AdminChildMenu />,
        bannerCarouselParent: <AdminParentBannerCarousel />,
        bannerCarouselChild: <AdminChildBannerCarousel />,
      };

      setCurrentComponent(
        componentMap[route] || (
          <div className="bg-[#000] text-white capitalize p-4 text-center text-base">
            Page not found
          </div>
        )
      );
    } catch (error) {
      setCurrentComponent(
        <div className="bg-[#000] text-white capitalize p-4 text-center text-base">
          Something went wrong
        </div>
      );
    }
  }

  useEffect(() => {
    setComponentAccordingToRoute();
  }, [params]);

  return (
    <>
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

      {/* {currentComponent} */}
    </>
  );
};

export default AdminJunctionClient;
