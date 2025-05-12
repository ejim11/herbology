"use client";
import React, { useContext, useState } from "react";
import FirstSection from "../FirstSection";
import Image from "next/image";
import { HerbItemType } from "@/types/herbItem";
import formatAmount from "@/utils/formatAmount";
import appContext from "@/store/appContext";

const Hero = ({ herb }: { herb: HerbItemType }) => {
  const { addItemToCart } = useContext(appContext);

  const price = herb.price
    ? herb.price
    : herb.volumesPrices && herb.volumesPrices[0].price;

  const [itemPrice, setItemPrice] = useState<number>(price || 0);

  return (
    <FirstSection containerClassName="flex min-h-[calc(100vh-8rem)] max-sm:flex-col">
      <div className="w-[60%]  max-xl:w-[55%] max-lg:w-[50%] max-md:w-[45%] h-[calc(100vh-8rem)] max-sm:w-full max-sm:h-[55rem] ">
        <Image
          src={herb.image}
          alt={`${herb.name} image`}
          priority
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[40%] max-xl:w-[45%] max-lg:w-[50%] max-md:w-[55%] max-sm:w-full max-sm:mt-[3rem] flex flex-col justify-center px-[5rem] max-xl:px-[3rem] max-md:px-[2rem] ">
        <p className="text-[rgba(255,127,80,1)] capitalize mb-[1rem] text-[1.3rem] leading-[100%]">
          {herb.category}
        </p>
        <div className="flex items-end max-md:flex-col max-md:items-start">
          <p className="font-cambon text-[4rem] leading-[100%] text-secondary-2">
            {herb.title}
          </p>
          <p className="font-roboto text-[1.4rem] text-[rgba(123,132,135,1)] ml-[0.8rem] max-md:ml-0">
            {herb.name}
          </p>
        </div>
        <p className="mt-[1.8rem] mb-[3.2rem] text-[2rem] font-roboto font-medium text-secondary-2 leading-[100%]">
          ₦{formatAmount(String(itemPrice))}
        </p>
        <p className="font-roboto text-[1.4rem] leading-[2.6rem] text-[rgba(123,132,135,1)]">
          {herb.description}
        </p>
        {herb.volumesPrices && herb.volumesPrices.length > 0 ? (
          <div className="flex font-roboto mt-[4rem]">
            {herb.volumesPrices.map(
              (item: { price: number; volume: string }) => (
                <button
                  key={item.volume}
                  onClick={() => {
                    setItemPrice(item.price);
                  }}
                  className={` text-[1.4rem] cursor-pointer leading-[2.6rem] px-[1.6rem] py-[0.8rem] border rounded-[6rem] mr-[1.6rem] transition-all duration-150 ease-in ${
                    item.price === itemPrice
                      ? "bg-secondary-2 text-white border-secondary-2"
                      : "border-[rgba(219,223,224,1)] text-[rgba(123,132,135,1)] bg-transparent"
                  }`}
                >
                  {item.volume}
                </button>
              )
            )}
          </div>
        ) : null}
        <button
          onClick={() => {
            if (herb.volumesPrices && herb.volumesPrices.length > 0) {
              addItemToCart({
                ...herb,
                volumesPrices: herb.volumesPrices.filter(
                  (item) => item.price === itemPrice
                ),
              });
              return;
            }

            addItemToCart(herb);
          }}
          className="mt-[4rem] block w-full cursor-pointer bg-secondary-2 text-center py-[2rem] font-roboto text-[1.4rem] leading-[100%] tracking-[1%] rounded-[0.8rem] text-white"
        >
          Add to cart
        </button>
      </div>
    </FirstSection>
  );
};

export default Hero;
