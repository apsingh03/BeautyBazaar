// import React, { createContext, useState } from "react";

// export const AppContext = createContext();

// export const AppContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [isLoadingTopProgress, setisLoadingTopProgress] = useState<number>(0);

//   return (
//     <AppContext.Provider
//       value={{
//         isLoadingTopProgress,
//         setisLoadingTopProgress,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  isLoadingTopProgress: number;
  setIsLoadingTopProgress: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoadingTopProgress, setIsLoadingTopProgress] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        isLoadingTopProgress,
        setIsLoadingTopProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
