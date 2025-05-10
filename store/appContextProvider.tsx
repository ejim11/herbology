"use client";
import React, { useState } from "react";
import appContext from "./appContext";

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  const onChangeStickerHeader = (val: boolean) => {
    setIsSticky(val);
  };

  return (
    <appContext.Provider
      value={{
        isHeaderSticky: isSticky,
        changeStickyHeader: onChangeStickerHeader,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
