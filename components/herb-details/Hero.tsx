"use client";
import React, { useState } from "react";
import FirstSection from "../FirstSection";
import Image from "next/image";
import { HerbItemType } from "@/types/herbItem";
import Link from "next/link";
import formatAmount from "@/utils/formatAmount";

const Hero = ({ herb }: { herb: HerbItemType }) => {
  const price = herb.price
    ? herb.price
    : herb.volumesPrices && herb.volumesPrices[0].price;

  const [itemPrice, setItemPrice] = useState<number>(price || 0);

  return (
    <FirstSection containerClassName="flex min-h-[calc(100vh-8rem)]">
      <div className="w-[60%] h-[calc(100vh-8rem)]">
        <Image
          src={herb.image}
          alt={`${herb.name} image`}
          priority
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[40%] flex flex-col justify-center px-[5rem]">
        <p className="text-[rgba(255,127,80,1)] capitalize mb-[1rem] text-[1.3rem] leading-[100%]">
          {herb.category}
        </p>
        <div className="flex items-end">
          <p className="font-cambon text-[4rem] leading-[100%] text-secondary-2">
            {herb.title}
          </p>
          <p className="font-roboto text-[1.4rem] text-[rgba(123,132,135,1)] ml-[0.8rem]">
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
        <Link
          href="/cart"
          className="mt-[4rem] block w-full bg-secondary-2 text-center py-[2rem] font-roboto text-[1.4rem] leading-[100%] tracking-[1%] rounded-[0.8rem] text-white"
        >
          Add to cart
        </Link>
      </div>
    </FirstSection>
  );
};

export default Hero;
