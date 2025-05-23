"use client";
import { herbs } from "@/data/herbs";
import React, { useState } from "react";
import HerbList from "../HerbList";
import { HerbItemType } from "@/types/herbItem";
import { toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";

const filters: string[] = ["treatment", "aphrodisiacs", "intimate-care"];
const HerbsMeetIntimacy = () => {
  const [herbFilter, setHerbFilter] = useState(filters[0]);

  const filteredHerbs = herbs.filter(
    (herb: HerbItemType) => herb.category === herbFilter
  );

  return (
    <section className="px-[8rem] py-[12rem] max-xl:px-[5rem] max-lg:px-[3rem] max-md:px-[2rem] max-lg:py-[6rem] max-xl:py-[8rem] flex flex-col items-center text-center bg-white">
      <h2 className="text-[4.8rem] max-smd:text-[3rem] font-cambon font-medium text-primary-1">
        Herbs Meet Intimacy
      </h2>
      <div className="flex items-center my-[3.2rem]">
        {filters.map((filter: string) => (
          <button
            type="button"
            key={filter}
            onClick={() => {
              setHerbFilter(filter);
              toastSuccess(
                `${filter} category`,
                <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />
              );
            }}
            className={`${
              herbFilter === filter
                ? "text-[rgba(61,90,92,1)] border-[rgba(61,90,92,1)]"
                : "text-[rgba(143,168,168,1)] border-transparent"
            } mr-[2.4rem] font-bold hover:text-primary-1  last:mr-0 uppercase pb-[1.6rem] border-b cursor-pointer transition-all duration-150 ease-in`}
          >
            {filter}
          </button>
        ))}
      </div>
      <HerbList herbs={filteredHerbs} />
    </section>
  );
};

export default HerbsMeetIntimacy;
