"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HerbItemType } from "@/types/herbItem";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HerbItem from "./HerbItem";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const sliderBtnClassnName =
  "bg-secondary-2 flex items-center  -top-[12rem]  justify-center w-[4.2rem] h-[4.2rem] rounded-[0.8rem] absolute  z-20     hover:bg-[rgba(27,61,63,0.5)] cursor-pointer transition-all duration-150 ease-in";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={`${sliderBtnClassnName} right-0  `}>
      <GoChevronRight className="text-white w-[2.8rem] h-[2.8rem]" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button className={`${sliderBtnClassnName} right-[7rem]`} onClick={onClick}>
      <GoChevronLeft className="text-white w-[2.8rem] h-[2.8rem]" />
    </button>
  );
}

const ProductsSlides = ({
  header,
  subHeader,
  products,
}: {
  header: string;
  subHeader: string;
  products: HerbItemType[];
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
    // customPaging: function (i: any) {
    //     return <div className="  "></div>;
    // },
  };

  return (
    <section className="px-[8rem] pt-[12rem] ">
      <div>
        <div>
          <h3 className="text-[4.8rem] font-cambon text-primary-1 mb-[1rem]">
            {header}
          </h3>
          <p className="leading-[2rem] text-secondary-1 font-roboto">
            {subHeader}
          </p>
        </div>
      </div>
      <div className="mt-[4.8rem]">
        <Slider {...settings}>
          {products.map((herb: HerbItemType) => (
            <div key={herb.name} className="px-[1rem]">
              <HerbItem
                image={herb.image}
                name={herb.name}
                title={herb.title}
                price={
                  herb.price
                    ? herb.price
                    : herb.volumesPrices
                    ? herb.volumesPrices[0].price
                    : 0
                }
                slug={herb.slug}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductsSlides;
