import React from "react";
import { MdCancel } from "react-icons/md";

interface ModalWrapperProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  isOpenModal,
  setIsOpenModal,
}) => {
  return (
    isOpenModal && (
      <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50"></div>

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-xl w-96">
            {/* Header */}
            <div
              onClick={() => setIsOpenModal(false)}
              className=" justify-items-end cursor-pointer"
            >
              <MdCancel size={30} />
            </div>

            {children}
          </div>
        </div>
      </>
    )
  );
};

export default ModalWrapper;
