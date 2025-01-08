import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

interface TableWrapperProps {
  //   children: React.ReactNode;
  theadArray: String[];
  children: React.ReactNode;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addBtnName: String;
}

const TableWrapper: React.FC<TableWrapperProps> = ({
  theadArray,
  children,
  setIsOpenModal,
  addBtnName,
}) => {
  return (
    <div className="relative">
      <div className="card" id="customerList">
        <div className="card-body">
          <div className="grid grid-cols-1 gap-5 mb-5 xl:grid-cols-2">
            <div>
              <div className="relative xl:w-3/6">
                <input
                  type="text"
                  className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Search for ..."
                  autoComplete="off"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="search"
                  className="lucide lucide-search inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div className="ltr:md:text-end rtl:md:text-start">
              <button
                className="py-2 px-4 text-center border bg-blue-600 hover:bg-blue-700 text-sm text-white rounded-md  flex flex-row items-center gap-3 capitalize"
                onClick={() => setIsOpenModal(true)}
              >
                <span>
                  <AiFillPlusCircle size={15} />
                </span>
                {addBtnName}
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap" id="customerTable">
              <thead className="bg-slate-100 dark:bg-zink-600">
                <tr>
                  {theadArray?.map((data, idx) => {
                    return (
                      <th
                        key={idx}
                        className="sort px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500 ltr:text-left rtl:text-right"
                        data-sort="customer_name"
                      >
                        {data}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className="list form-check-all">{children}</tbody>
            </table>
            <div className="noresult" style={{ display: "none" }}>
              <div className="text-center p-7">
                <h5 className="mb-2">Sorry! No Result Found</h5>
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  We've searched more than 150+ Orders We did not find any
                  orders for you search.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="flex gap-2 pagination-wrap">
              <a
                className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto page-item pagination-prev disabled"
                href="#"
              >
                Previous
              </a>
              <ul className="flex gap-2 mb-0 pagination listjs-pagination">
                <li className="active">
                  <a className="page" href="#" data-i={1} data-page={5}>
                    1
                  </a>
                </li>
                <li>
                  <a className="page" href="#" data-i={2} data-page={5}>
                    2
                  </a>
                </li>
              </ul>
              <a
                className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto page-item pagination-prev pagination-next"
                href="#"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableWrapper;
