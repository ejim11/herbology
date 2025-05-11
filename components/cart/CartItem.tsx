"use client";
import { CartItem } from "@/store/appContextProvider";
import Image from "next/image";
import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import appContext from "@/store/appContext";
import formatAmount from "@/utils/formatAmount";

const CartItemComp = ({ cartItem }: { cartItem: CartItem }) => {
  const { increaseOrDecreaseCartItemQty } = useContext(appContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const increaseOrDecreaseCartItemQtyHandler = (e: any) => {
    if (!e.target.dataset.sign) return;
    increaseOrDecreaseCartItemQty(cartItem.item, e.target.dataset.sign);
  };

  const price = cartItem.item.price
    ? cartItem.item.price
    : cartItem.item.volumesPrices && cartItem.item.volumesPrices[0].price;

  return (
    <div className="border-t border-t-[rgba(0,0,0,0.15)] flex py-[4rem]">
      <div className="w-[20rem] h-[20rem] rounded-[0.5rem] overflow-hidden">
        <Image
          src={cartItem.item.image}
          alt={`${cartItem.item.name} image`}
          priority
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="w-full flex-1 ml-[3rem] flex  flex-col font-roboto">
        <p className="font-medium text-[1.8rem] text-secondary-2 tracking-[2%] leading-[100%]">
          {cartItem.item.title}
        </p>
        <p className=" text-[rgba(123,132,135,1)] leading-[100%] mt-[1.6rem]">
          {cartItem.item.name}
        </p>
        {cartItem.item.volumesPrices && (
          <p className="mt-[1rem] text-[rgba(123,132,135,1)]">
            {cartItem.item.volumesPrices[0].volume}
          </p>
        )}
        <div className="flex items-center  mt-[1.6rem]">
          <p className="text-[rgba(123,132,135,1)]">Quantity: </p>
          <p className="ml-[1rem] font-medium text-secondary-2">
            {cartItem.choosenQty}
          </p>
        </div>
        <div
          className="flex w-max border border-[rgba(217,217,217,1)] overflow-hidden mt-auto rounded-[2.4rem] text-center "
          onClick={increaseOrDecreaseCartItemQtyHandler}
        >
          <button
            type="button"
            className="px-[2rem] py-[1.2rem] hover:bg-gray-300 transition-all duration-150 ease-in cursor-pointer"
            data-sign="minus"
          >
            <FaMinus
              className="w-[2rem] h-[2rem] text-black"
              data-sign="minus"
            />
          </button>
          <div className="flex justify-center items-center px-[1rem]  ">
            {cartItem.choosenQty}
          </div>
          <button
            type="button"
            className="px-[2rem] py-[1.2rem] hover:bg-gray-300 transition-all duration-150 ease-in cursor-pointer"
            data-sign="plus"
          >
            <FaPlus className="w-[2rem] h-[2rem] text-black" data-sign="plus" />
          </button>
        </div>
      </div>
      {price && (
        <p className="text-secondary-2  font-medium leading-[100%] tracking-[2%] text-[2rem] ml-[1rem] ">
          ₦{formatAmount(String(price * cartItem.choosenQty))}
        </p>
      )}
    </div>
  );
};

export default CartItemComp;
