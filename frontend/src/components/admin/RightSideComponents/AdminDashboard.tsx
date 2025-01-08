import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 bg-white p-4  shadow-lg rounded-md ">
          <div className="text-center card-body">
            <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-custom-100 text-custom-500 dark:bg-custom-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="wallet-2"
                className="lucide lucide-wallet-2"
              >
                <path d="M17 14h.01"></path>
                <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"></path>
              </svg>
            </div>
            <h5 className="mt-4 mb-2">
              $
              <span className="counter-value" data-target="236.18">
                236.18
              </span>
              k
            </h5>
            <p className="text-slate-500 dark:text-zink-200">Total Revenue</p>
          </div>
        </div>
        <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 bg-white p-4  shadow-lg rounded-md  ">
          <div className="text-center card-body">
            <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="package"
                className="lucide lucide-package"
              >
                <path d="m7.5 4.27 9 5.15"></path>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                <path d="m3.3 7 8.7 5 8.7-5"></path>
                <path d="M12 22V12"></path>
              </svg>
            </div>
            <h5 className="mt-4 mb-2">
              <span className="counter-value" data-target="13461">
                13,461
              </span>
            </h5>
            <p className="text-slate-500 dark:text-zink-200">Total Orders</p>
          </div>
        </div>

        <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 bg-white p-4  shadow-lg rounded-md  ">
          <div className="text-center card-body">
            <div className="flex items-center justify-center mx-auto text-green-500 bg-green-100 rounded-full size-14 dark:bg-green-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="truck"
                className="lucide lucide-truck"
              >
                <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"></path>
                <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"></path>
                <circle cx="7" cy="18" r="2"></circle>
                <path d="M15 18H9"></path>
                <circle cx="17" cy="18" r="2"></circle>
              </svg>
            </div>
            <h5 className="mt-4 mb-2">
              <span className="counter-value" data-target="17150">
                17,150
              </span>
            </h5>
            <p className="text-slate-500 dark:text-zink-200">Delivered</p>
          </div>
        </div>

        <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 bg-white p-4  shadow-lg rounded-md ">
          <div className="text-center card-body">
            <div className="flex items-center justify-center mx-auto text-red-500 bg-red-100 rounded-full size-14 dark:bg-red-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="package-x"
                className="lucide lucide-package-x"
              >
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                <path d="m7.5 4.27 9 5.15"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <line x1="12" x2="12" y1="22" y2="12"></line>
                <path d="m17 13 5 5m-5 0 5-5"></path>
              </svg>
            </div>
            <h5 className="mt-4 mb-2">
              <span className="counter-value" data-target="3519">
                3,519
              </span>
            </h5>
            <p className="text-slate-500 dark:text-zink-200">Cancelled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
