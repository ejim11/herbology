"use client";
import React, { useContext } from "react";
import TreatmentsCollection from "../TreatmentsCollection";
import appContext from "@/store/appContext";
import FirstSection from "../FirstSection";
import { CartItem } from "@/store/appContextProvider";
import CartItemComp from "./CartItem";
import formatAmount from "@/utils/formatAmount";
import Link from "next/link";

const CartComp = () => {
  const { cartItems } = useContext(appContext);

  const total = cartItems
    .map((item: CartItem) => {
      const price = item.item.price
        ? item.item.price
        : item.item.volumesPrices && item.item.volumesPrices[0].price;
      return { chosenQty: item.choosenQty, price: price ?? 0 };
    })
    .map((val) => val.chosenQty * val.price)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <main className="flex flex-col w-full">
      <FirstSection containerClassName="px-[8rem] min-h-[50vh] py-[6rem]">
        <h3 className="text-[4.8rem] font-cambon font-medium leading-[5.6rem] text-secondary-2">
          Your Cart
        </h3>
        <div className="mt-[1.9rem] flex relative justify-between">
          <div className=" w-[55%]">
            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item: CartItem) => (
                  <CartItemComp key={item.item.name} cartItem={item} />
                ))}
              </div>
            ) : (
              <p className="mt-[1.5rem] text-primary-1 font-roboto">
                No items in cart
              </p>
            )}
          </div>
          <div className="sticky top-[5rem] w-[40%] h-max border bg-[rgba(249,251,251,1)] rounded-[0.8rem] px-[2.8rem] py-[2.2rem] border-[rgba(217,217,217,1)]">
            <div className="flex justify-between items-center font-roboto">
              <p className="text-[2rem] font-medium leading-[100%] tracking-[2%] text-[rgba(123,132,135,1)]">
                SUBTOTAL
              </p>
              <p className="text-[3.2rem] font-medium text-secondary-2 leading-[100%]">
                ₦{formatAmount(String(total))}
              </p>
            </div>
            <Link
              href={"/checkout"}
              className="mt-[4rem] block w-full cursor-pointer bg-secondary-2 text-center py-[2rem] font-roboto text-[1.4rem] leading-[100%] tracking-[1%] rounded-[0.8rem] text-white uppercase"
            >
              checkout
            </Link>
          </div>
        </div>
      </FirstSection>
      <TreatmentsCollection />
    </main>
  );
};

export default CartComp;
