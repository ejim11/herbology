"use client";
import React, { useContext } from "react";
import logo from "../assets/logo-dark.png";
import Link from "next/link";
import Image from "next/image";
import { PiBag } from "react-icons/pi";
import { usePathname } from "next/navigation";
import appContext from "@/store/appContext";

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

  const { isHeaderSticky } = useContext(appContext);

  return (
    <header
      className={`h-[8rem] w-full flex items-center px-[8rem] bg-white justify-between font-roboto z-50  ${
        isHeaderSticky ? `fixed top-0 shadow-2xl    showHeader` : "relative "
      }`}
    >
      <nav>
        <ul className="flex items-center">
          {headerNavLinks.map((link: { text: string; link: string }) => (
            <li key={link.text} className="mr-[4rem] last:mr-0">
              <Link
                href={link.link}
                className={`${
                  pathname === link.link
                    ? "border-b-primary-1"
                    : " border-b-transparent"
                } text-[1.3rem] uppercase font-medium block pb-[1rem] border-b transition-all duration-150 ease-in leading-[100%] text-primary-1`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center text-center">
        <div className="w-[26rem]">
          <Image
            src={logo}
            alt="logo image"
            priority
            className="w-full h-full"
          />
        </div>
        <p className="text-[.75rem] mt-[.4rem] leading-[0.6rem] uppercase">
          Hand Made herbal Wellness
        </p>
      </div>
      <Link href={"/cart"} className="flex items-center text-primary-1">
        <PiBag className="w-[2.4rem] h-[2.4rem] text-current mr-[.7rem]" />
        <span className="text-[1.3rem] uppercase font-medium">cart</span>
      </Link>
    </header>
  );
};

export default Header;
