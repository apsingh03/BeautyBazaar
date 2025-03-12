"use client";

import AdminParentFilter from "@/components/admin/RightSideComponents/Filter/AdminParentFilter";
import AdminChildFilter from "@/components/admin/RightSideComponents/Filter/AdminChildFilter";
import AdminParentMenu from "@/components/admin/RightSideComponents/Menu/AdminParentMenu";
import AdminChildMenu from "@/components/admin/RightSideComponents/Menu/AdminChildMenu";
import AdminParentBannerCarousel from "@/components/admin/RightSideComponents/BannerCarousel/AdminParentBannerCarousel";
import AdminChildBannerCarousel from "@/components/admin/RightSideComponents/BannerCarousel/AdminChildBannerCarousel";
import { useState, useEffect } from "react";
import AdminDashboard from "@/components/admin/RightSideComponents/AdminDashboard";
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

  return <>{currentComponent}</>;
};

export default AdminJunctionClient;
