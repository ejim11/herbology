import Image, { StaticImageData } from "next/image";
import React from "react";
import rootedImg from "../assets/home/root.svg";
import heartImg from "../assets/home/heart.svg";
import checkedImg from "../assets/home/check.svg";

const WhyChooseUs = () => {
  const data: {
    icon: StaticImageData;
    title: string;
    text: string;
  }[] = [
    {
      icon: rootedImg,
      title: "Rooted in Nature",
      text: "Our products are made from 100% natural herbs—no chemicals, no compromises. Just pure, plant-powered healing.",
    },
    {
      icon: heartImg,
      title: "Focused on Intimate Wellness",
      text: "We specialize in herbal treatments for STIs, aphrodisiacs, and overall intimate care—because your wellness deserves focused attention.",
    },
    {
      icon: checkedImg,
      title: "Tried, Tested & Trusted",
      text: "Each formula is carefully crafted, tested, and trusted by thousands who’ve reclaimed their confidence naturally.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-primary-1 font-cambon text-[4.8rem] leading-[6.4rem] -tracking-[0.2rem] mb-[1.6rem]">
        Why Choose Us
      </h3>
      <p className="font-roboto leading-[2.4rem] text-[rgba(61,90,92,0.8)]">
        Experience the power of nature-backed intimacy care you can trust
      </p>
      <div className="grid grid-cols-3 gap-x-[8rem] w-full mt-[6.4rem]">
        {data.map(
          (item: { icon: StaticImageData; title: string; text: string }) => (
            <div key={item.title} className="items-center flex flex-col">
              <div className="w-[4rem] h-[4rem] mb-[3.2rem]">
                <Image
                  src={item.icon}
                  alt={`${item.title} image`}
                  priority
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <p className="font-cambon-l leading-[2.9rem] mb-[1.6rem] text-[2.4rem] text-primary-1">
                {item.title}
              </p>
              <p className="font-roboto leading-[2.8rem] text-secondary-1">
                {item.text}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WhyChooseUs;
