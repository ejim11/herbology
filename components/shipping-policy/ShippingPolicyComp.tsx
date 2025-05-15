"use client";
import appContext from "@/store/appContext";
import React, { useContext } from "react";
import FirstSection from "../FirstSection";
import { shippingData } from "@/data/shippingData";

const ShippingPolicyComp = () => {
  const { isHeaderSticky } = useContext(appContext);

  return (
    <section
      className={`w-full px-[8rem] max-xl:px-[5rem]  max-lg:px-[3rem]  ${
        isHeaderSticky ? "py-[12rem]" : "py-[8rem] "
      } max-md:px-[2rem] bg-[rgba(245,247,251,1)] text-secondary-2`}
    >
      <FirstSection containerClassName="text-[4.8rem] max-smd:text-[3rem] font-cambon font-medium leading-[5.6rem] text-secondary-2 mb-[2rem]">
        Shipping Policy
      </FirstSection>
      <p className="mb-[1rem]">Last updated: May 15, 2025</p>
      <ul className="list-decimal font-roboto mt-[2rem] max-ssm:list-none">
        {shippingData.map(
          (privacy: {
            header: string;
            subHeader?: string;
            texts?: string[];
            endText?: string;
          }) => (
            <li key={privacy.header} className="mb-[2rem]">
              <p className="text-primary-1 font-medium text-[2rem]">
                {privacy.header}
              </p>
              {privacy.subHeader && (
                <p className="my-[0.5rem]">{privacy.subHeader}</p>
              )}
              {privacy.texts && (
                <ul className="list-disc ml-[2rem]">
                  {privacy.texts.map((text: string) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              )}
              {privacy.endText && (
                <p className="mt-[0.5rem]">{privacy.endText}</p>
              )}
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default ShippingPolicyComp;
