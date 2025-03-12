import { AppContext } from "@/Context/AppContext";
import React, { useContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";

interface WholeAppWrapperProps {
  children: React.ReactNode;
}

const WholeAppWrapper: React.FC<WholeAppWrapperProps> = ({ children }) => {
  // const { isLoadingTopProgress, setisLoadingTopProgress } =
  //   useContext(AppContext);

  const [isLoadingTopProgress, setisLoadingTopProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color="#2563eb"
        height={3}
        progress={isLoadingTopProgress}
        shadow={true}
        onLoaderFinished={() => setisLoadingTopProgress(0)}
      />

      {children}
    </>
  );
};

export default WholeAppWrapper;
