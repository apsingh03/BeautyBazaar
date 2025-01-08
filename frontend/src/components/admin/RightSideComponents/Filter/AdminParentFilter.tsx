"use client";
import React, { useState } from "react";
import { PiTextTFill } from "react-icons/pi";
import { AiFillPlusCircle } from "react-icons/ai";

import ModalWrapper from "../ModalWrapper";
import TableWrapper from "../TableWrapper";
const AdminParentFilter = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="  bg-white px-3 py-6 shadow-lg">
      <TableWrapper
        theadArray={["S.No", "Filter Name", "Actions"]}
        setIsOpenModal={setIsOpenModal}
        addBtnName={"add child filter"}
      >
        <tr>
          <th
            className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
            scope="row"
          >
            1
          </th>

          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500 customer_name">
            Timothy Smith
          </td>

          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500 customer_name">
            Timothy Smith
          </td>
        </tr>
      </TableWrapper>

      <ModalWrapper isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <div className="space-y-5">
          <div className="relative">
            <div className="absolute inset-[70%] left-2 flex items-center">
              <PiTextTFill size={30} color="#1D1D1D" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="FilterName" className="text-gray-700 font-medium">
                Filter Name
              </label>
              <input
                type="text"
                className="px-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="FilterName"
                name="FilterName"
              />
            </div>
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-white w-full rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Filter
          </button>
        </div>
      </ModalWrapper>
    </div>
  );
};

export default AdminParentFilter;
