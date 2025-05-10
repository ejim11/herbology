import { valuesData } from "@/data/valuesData";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Values = () => {
  return (
    <section className=" bg-primary-1 py-[6.4rem] flex flex-col">
      {valuesData.map(
        (value: { title: string; text: string; image: StaticImageData }) => (
          <div
            key={value.title}
            className="flex justify-end mb-[3.2rem] last:mb-0"
          >
            <div className="w-[30%] pt-[9rem] mr-[4rem] font-roboto">
              <p className="text-[rgba(255,255,255,0.6)] uppercase text-[1.2rem] pb-[0.8rem] border-b border-b-[rgba(255,255,255,0.15)]">
                OUR VALUES
              </p>
              <h4 className="mt-[1.6rem] mb-[0.8rem] font-cambon text-white font-medium leading-[5.6rem] -tracking-[0.3rem] text-[4rem]">
                {value.title}
              </h4>
              <p className="leading-[2.2rem] text-white text-[1.3rem]">
                {value.text}
              </p>
            </div>
            <div className="w-[50%] h-[70rem]">
              <Image
                src={value.image}
                alt={`${value.title} image`}
                priority
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Values;
