import { valuesData } from "@/data/valuesData";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Values = () => {
  return (
    <section className=" bg-primary-1 py-[6.4rem] flex flex-col max-smd:px-[2rem]">
      {valuesData.map(
        (value: { title: string; text: string; image: StaticImageData }) => (
          <div
            key={value.title}
            className="flex justify-end max-smd:flex-col max-md:justify-between max-md:pl-[2rem] mb-[3.2rem] max-smd:mb-[5rem] last:mb-0 max-smd:pl-0"
          >
            <div className="w-[30%] max-xlg:w-[40%] max-smd:w-full max-md:mr-0 pt-[9rem] max-smd:pt-0 mr-[4rem] font-roboto">
              <p className="text-[rgba(255,127,80,1)] uppercase text-[1.2rem] pb-[0.8rem] border-b border-b-[rgba(255,255,255,0.15)]">
                OUR VALUES
              </p>
              <h4 className="mt-[1.6rem] mb-[0.8rem] font-cambon text-white font-medium leading-[5.6rem] -tracking-[0.3rem] text-[4rem] max-smd:text-[2.8rem]">
                {value.title}
              </h4>
              <p className="leading-[2.2rem] text-white text-[1.3rem]">
                {value.text}
              </p>
            </div>
            <div className="w-[50%] max-md:w-[55%] max-smd:mt-[2rem] max-smd:w-full h-[72rem] max-sm:h-[50rem]">
              <Image
                src={value.image}
                alt={`${value.title} image`}
                priority
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Values;
