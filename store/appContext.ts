/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { CartItem } from "./appContextProvider";
import { HerbItemType } from "@/types/herbItem";

type AppContextType = {
  isHeaderSticky: boolean;
  changeStickyHeader: (val: boolean) => void;
  cartItems: CartItem[];
  addItemToCart: (item: HerbItemType) => void;
  increaseOrDecreaseCartItemQty: (item: HerbItemType, sign: string) => void;
  removeCartItem: (item: CartItem) => void;
  emptyCart: () => void;
};

const appContext = React.createContext<AppContextType>({
  isHeaderSticky: false,
  changeStickyHeader: (val: boolean) => {},
  cartItems: [],
  addItemToCart: (item: HerbItemType) => {},
  increaseOrDecreaseCartItemQty: (item: HerbItemType, sign: string) => {},
  removeCartItem: (item: CartItem) => {},
  emptyCart: () => {},
});

export default appContext;
