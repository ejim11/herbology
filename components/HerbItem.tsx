import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import formatAmount from "@/utils/formatAmount";

const HerbItem = ({
  image,
  name,
  title,
  price,
  slug,
}: {
  image: StaticImageData;
  name: string;
  title: string;
  price: number;
  slug: string;
}) => {
  return (
    <Link
      href={`/${slug.toLowerCase()}`}
      className="flex flex-col text-center font-roboto w-full bg-white pb-[2rem] rounded-[0.8rem] "
    >
      <div className="w-full h-[50rem] rounded-[0.8rem] overflow-hidden">
        <Image
          src={image}
          alt={`${title}-${name} image`}
          priority
          width={500}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-secondary-2 font-medium leading-[100%] mt-[2.4rem] mb-[1.2rem]">
        {title}
      </p>
      <p className="text-secondary-1 text-[1.2rem] leading-[100%]">{name}</p>
      <p className="mt-[3.2rem] font-medium text-secondary-2">
        ₦{formatAmount(String(price))}
      </p>
    </Link>
  );
};

export default HerbItem;
