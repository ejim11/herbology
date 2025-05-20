/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { HerbItemType } from "@/types/herbItem";
import React, { useState } from "react";
import AccordionItem from "../Accordion";
import { SiCheckio } from "react-icons/si";

const DescriptionAndRecommendation = ({ herb }: { herb: HerbItemType }) => {
  const [expanded, setExpanded] = useState<boolean | number>(false);

  const data: { title: string; value: any; list?: any }[] = [
    {
      title: "full description",
      value: herb.fullDescription,
      list: herb.textList ?? null,
    },
    {
      title: "recommendation",
      value: herb.recommendation,
    },
  ].filter((item) => item.value);

  return (
    <div className="w-full ">
      {data.map(
        (item: { title: string; value: any; list?: any }, index: number) => {
          return (
            <AccordionItem
              key={item.title}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
              title={item.title}
              titleClassName="uppercase"
            >
              {item.title === "full description" && (
                <div className="pt-[2rem] flex flex-col">
                  {item.value.map((text: string) => (
                    <p
                      key={text}
                      className="mb-[1.5rem] last:mb-0 text-[rgba(123,132,135,1)] text-[1.4rem] font-roboto leading-[2.4rem]"
                    >
                      {text}
                    </p>
                  ))}
                  {item.list ? (
                    <div className="font-roboto text-[1.4rem]">
                      {item.list.title && (
                        <p className="text-primary-1 mb-[1rem]">
                          {item.list.title}
                        </p>
                      )}
                      <ul className="flex flex-col">
                        {item.list.list.map((text: string) => (
                          <li
                            key={text}
                            className="flex items-center mb-[1rem] last:mb-0"
                          >
                            <SiCheckio className="w-[2.4rem] h-[2.4rem] mr-[1rem] text-primary-1" />

                            <span className="text-[rgba(123,132,135,1)] flex-1">
                              {text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )}
              {item.title === "recommendation" && (
                <div className="pt-[2rem]">
                  {item.value.map((text: string) => (
                    <p
                      key={text}
                      className="mb-[1.5rem] last:mb-0 text-[rgba(123,132,135,1)] text-[1.4rem] font-roboto leading-[2.4rem]"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              )}
            </AccordionItem>
          );
        }
      )}
    </div>
  );
};

export default DescriptionAndRecommendation;
