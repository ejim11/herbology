"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaMinus } from "react-icons/fa6";

const AccordionItem: FC<{
  children: ReactNode;
  index: number;
  expanded: number | boolean;
  setExpanded: Dispatch<SetStateAction<number | boolean>>;
  title: string;
}> = ({ expanded, index, setExpanded, title, children }) => {
  const isOpen = index === expanded;

  const onToggleDisplayEventInfoHandler = () => {
    setExpanded(isOpen ? false : index);
  };

  return (
    <div className={`  border-b py-[3rem] `}>
      <motion.button
        className="w-full  flex justify-between items-center "
        onClick={onToggleDisplayEventInfoHandler}
        initial={false}
      >
        <span className="flex-1 font-roboto text-left font-medium leading-[100%] text-[rgba(61,90,92,1)]">
          {title}
        </span>
        {!isOpen ? <AiOutlinePlus /> : <FaMinus />}
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden  "
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
