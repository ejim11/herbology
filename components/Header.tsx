"use client";
import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo-dark.svg";
import Link from "next/link";
import Image from "next/image";
import { PiBag } from "react-icons/pi";
import { usePathname } from "next/navigation";
import appContext from "@/store/appContext";
import { IoMenu, IoClose } from "react-icons/io5";

const headerNavLinks: { text: string; link: string }[] = [
  {
    text: "home",
    link: "/",
  },
  {
    text: "about us",
    link: "/about-us",
  },
  {
    text: "contact us",
    link: "/contact-us",
  },
];

const Header = () => {
  const pathname = usePathname();

  const { isHeaderSticky, cartItems } = useContext(appContext);

  const [scaleUp, setScaleUp] = useState<boolean>(false);

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeMenuModal = (e: any) => {
    if (e.target.dataset.close) {
      setMenuIsVisible(false);
    }
  };

  useEffect(() => {
    setScaleUp(true);
    const timer = setTimeout(() => {
      setScaleUp(false);
    }, 200);

    return () => {
      clearTimeout(timer);
      setScaleUp(false);
    };
  }, [cartItems]);

  return (
    <header
      className={`h-[8rem] w-full flex items-center px-[8rem] max-xl:px-[5rem] max-lg:px-[3rem] max-md:px-[2rem] bg-white max-sm:justify-self-auto font-roboto z-50  ${
        isHeaderSticky ? `fixed top-0 shadow-2xl    showHeader` : "relative "
      }`}
    >
      <div className="w-[26rem]">
        <Image src={logo} alt="logo image" priority className="w-full h-full" />
      </div>
      <nav
        className={`max-sm:fixed max-sm:top-[8rem] max-sm:bottom-0 max-sm:right-0 max-sm:left-0 max-sm:h-screen max-sm:w-full max-sm:bg-[rgba(0,0,0,0.7)] max-sm:z-[100] max-sm:transition-all max-sm:duration-300 max-sm:ease-linear ml-auto mr-[5rem] max-smd:mr-[3rem] max-sm:mr-0 ${
          menuIsVisible
            ? "max-sm:translate-y-0 max-sm:opacity-100"
            : "max-sm:-translate-y-[110%] max-sm:opacity-0"
        }`}
        data-close="close"
        onClick={closeMenuModal}
      >
        <ul className="flex items-center max-sm:bg-white max-sm:w-full max-sm:h-max max-sm:flex-col max-sm:p-[2rem] max-sm:items-start">
          {headerNavLinks.map((link: { text: string; link: string }) => (
            <li
              key={link.text}
              className="mr-[4rem] max-md:mr-[2rem] last:mr-0 max-sm:w-full max-sm:mb-[1rem]"
              data-close="close"
            >
              <Link
                href={link.link}
                className={`${
                  pathname === link.link
                    ? "border-b-primary-1 max-sm:text-[rgba(255,127,80,1)] max-sm:border-b-[rgba(255,127,80,1)] "
                    : " border-b-transparent max-sm:border-b-[rgba(217,217,217,1)] max-sm:text-black "
                } text-[1.3rem] uppercase font-medium block pb-[1rem] border-b transition-all duration-150 ease-in leading-[100%] text-primary-1 max-sm:py-[1.5rem]`}
                data-close="close"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href={"/cart"}
        className="flex items-center text-primary-1 max-sm:ml-auto mb-[1rem] max-sm:mb-0 "
      >
        <div className="relative">
          <PiBag className="w-[2.4rem] h-[2.4rem] text-current mr-[.7rem]" />
          <span
            className={`${cartItems.length > 0 ? "flex " : "hidden"} ${
              scaleUp ? "scale-125" : "scale-100"
            } text-white -top-[1rem] -right-[0.2rem] bg-red-600 w-[2rem] h-[2rem] text-[1.2rem] rounded-full absolute items-center justify-center transition-all ease-in duration-200`}
          >
            {cartItems.length}
          </span>
        </div>

        {/* <span className="text-[1.3rem] uppercase font-medium max-sm:hidden">
          cart
        </span> */}
      </Link>
      {!menuIsVisible ? (
        <button
          type="button"
          className="hidden max-sm:block ml-[1.5rem]"
          onClick={() => {
            setMenuIsVisible(true);
            console.log("true");
          }}
        >
          <IoMenu className="w-[2.4rem] h-[2.4rem] text-black" />
        </button>
      ) : (
        <button
          type="button"
          className="hidden max-sm:block ml-[1.5rem]"
          onClick={() => {
            setMenuIsVisible(false);
          }}
        >
          <IoClose className="w-[2.4rem] h-[2.4rem] text-black" />
        </button>
      )}
    </header>
  );
};

export default Header;
