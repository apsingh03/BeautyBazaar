"use client";
import React, { useState } from "react";

import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

interface FaqProps {
  iconColor: string;
  iconSize: number;
  title: string;
  desc: string;
}

const Faq: React.FC<FaqProps> = ({ iconColor, iconSize, title, desc }) => {
  const [isToggle, setisToggle] = useState(false);

  return (
    <div className="flex flex-row justify-between font-sans">
      <div className="flex flex-col gap-3">
        <p
          onClick={() => setisToggle(!isToggle)}
          className={`${
            isToggle ? "text-[--secondary-color]" : "text-[--text-dark-shade]"
          } cursor-pointer  text-base font-normal font-sans `}
        >
          {title}
        </p>
        <div>
          {isToggle && (
            <p className="text-sm font-normal text-[--dark-gray] ml-3">
              {desc}
            </p>
          )}
        </div>
      </div>
      <div>
        {isToggle ? (
          <MdOutlineKeyboardArrowUp size={iconSize} color={iconColor} />
        ) : (
          <MdOutlineKeyboardArrowDown size={iconSize} color={iconColor} />
        )}
      </div>
    </div>
  );
};

export default Faq;
