"use client";

import React from "react";

type AppContextType = {
  isHeaderSticky: boolean;
  changeStickyHeader: (val: boolean) => void;
};

const appContext = React.createContext<AppContextType>({
  isHeaderSticky: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeStickyHeader: (val: boolean) => {},
});

export default appContext;
