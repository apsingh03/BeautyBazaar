import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

import { Fade as Hamburger } from "hamburger-react";

interface AdminHeaderProps {
  setIsToggleSideNav: React.Dispatch<React.SetStateAction<boolean>>;
  isToggleSideNav: boolean;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  setIsToggleSideNav,
  isToggleSideNav,
}) => {
  return (
    <div className="bg-white h-20  drop-shadow-md  px-4 flex flex-row justify-between  items-center">
      <div onClick={() => setIsToggleSideNav((prev) => !prev)}>
        <Hamburger
          toggled={isToggleSideNav}
          // toggle={true}
          size={30}
          duration={0.8}
        />
      </div>

      <div className="flex flex-row items-center gap-3">
        <div className="h-10 w-10 bg-[#F1F5F9] rounded-full place-items-center  content-center justify-center">
          <IoMdNotificationsOutline size={15} color="#1D1D1D" />
        </div>

        <div className="h-10 w-10 bg-[#F1F5F9] rounded-full place-items-center  content-center justify-center">
          <IoMdNotificationsOutline size={15} color="#1D1D1D" />
        </div>
        <div className="flex flex-row gap-3 items-center relative group cursor-pointer ">
          <div className="flex flex-col  text-end">
            <p className="text-sm font-medium">Your Name</p>
            <p className="text-xs font-medium">Developer</p>
          </div>
          <div>
            <FaUserAlt size={35} color="#1D1D1D" />
          </div>
          <div>
            <MdOutlineKeyboardArrowUp size={20} color="#1D1D1D" />
          </div>

          {/* Child */}

          <div className="absolute top-full bg-zinc-400 min-w-14 right-10 p-5 shadow-lg text-white rounded-sm hidden group-hover:block ">
            <p>My Name</p>
            <p>Settings</p>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
