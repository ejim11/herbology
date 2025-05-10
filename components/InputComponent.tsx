/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputProps = {
  containerWidth?: string;
  label?: string;
  labelTextColor?: string;
  name: string;
  autoFocus?: boolean;
  disabled?: boolean;
  border?: string;
  type: string;
  placeholder?: string;
  pl?: string;
  width?: string;
  height?: string;
  shadow?: string;
  validation?: any;
  register?: any;
  validate?: any;
  icon?: React.ReactNode;
  error?: any;
  my?: string;
  inputBg?: string;
  min?: number;
};

const InputComponent: React.FC<InputProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const displayPassword = (): void => {
    setVisible(!visible);
  };

  const getErrorClass = (): string => {
    return props.error &&
      props.error[props.name] &&
      props.error[props.name].message
      ? "text-red-500 border-red-500"
      : "border-[rgba(237,237,237,1)] text-black";
  };

  const getPasswordIcon = (): React.ReactNode => {
    return props.type === "password" ? (
      !visible ? (
        <FaEye
          className="absolute w-[2.2rem] h-[2.2rem] top-[1.2rem] right-[1rem] text-black cursor-pointer"
          onClick={displayPassword}
        />
      ) : (
        <FaEyeSlash
          className="absolute w-[2.2rem] h-[2.2rem] top-[1.2rem] right-[1rem] text-black cursor-pointer"
          onClick={displayPassword}
        />
      )
    ) : null;
  };

  const getErrorText = (): React.ReactNode => {
    return props.error &&
      props.error[props.name] &&
      props.error[props.name].message ? (
      <small className={`text-red-500  pt-[0.5rem]`}>
        {props.error[props.name].message}
      </small>
    ) : null;
  };

  return (
    <div
      className={`flex flex-col ${props.my ? props.my : "mb-[2.4rem]"} ${
        props.containerWidth ? props.containerWidth : ""
      } `}
    >
      {props.label && (
        <label
          htmlFor={props.name}
          className={`capitalize font-roboto text-[1.4rem] -tracking-[0.1rem]  mb-[.5rem] ${
            props.labelTextColor ? props.labelTextColor : "text-black"
          }`}
        >
          {props.label}
        </label>
      )}
      <div className="flex relative w-full">
        <input
          autoFocus={props.autoFocus}
          disabled={props.disabled}
          min={
            props.type === "date" ? new Date().toISOString().slice(0, 10) : null
          }
          type={
            props.type === "password"
              ? visible
                ? "text"
                : "password"
              : props.type
          }
          placeholder={props.placeholder}
          {...props.register(props.name, props.validation)}
          className={`${
            props.border ? props.border : "border rounded-lg  "
          } bg-white placeholder:text-[rgba(143,143,143,1)] font-roboto py-[1.2rem] relative ${
            props.pl ? props.pl : "pl-[4rem]"
          } pr-3 ${props.width ? props.width : "w-full"} ${
            props.height && props.height
          } ${
            props.shadow && props.shadow
          } focus:ring-0 focus:outline-hidden outline-hidden ring-0 ${getErrorClass()} md:w-full`}
        />
        {props.icon}
        {getPasswordIcon()}
      </div>
      {getErrorText()}
    </div>
  );
};

export default InputComponent;
