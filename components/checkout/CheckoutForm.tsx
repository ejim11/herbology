"use client";
import React, { useContext, useEffect, useState } from "react";
import InputComponent from "../InputComponent";
import { registrationOption } from "@/utils/inputValidator";
import { SubmitHandler, useForm } from "react-hook-form";
import appContext from "@/store/appContext";
import { CartItem } from "@/store/appContextProvider";
import Image from "next/image";
import formatAmount from "@/utils/formatAmount";
import { statesShippingFee } from "@/data/statesShippingFee";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  lga: string;
};

const CheckoutForm = () => {
  const { cartItems } = useContext(appContext);

  const subTotal = cartItems
    .map((item: CartItem) => {
      const price = item.item.price
        ? item.item.price
        : item.item.volumesPrices && item.item.volumesPrices[0].price;
      return { chosenQty: item.choosenQty, price: price ?? 0 };
    })
    .map((val) => val.chosenQty * val.price)
    .reduce((acc, cur) => acc + cur, 0);

  const [address, setAddress] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");

  const [userStateLocation, setUserStateLocation] = useState<string>("");

  const [userStateLocationErrorText, setUserStateLocationErrorText] =
    useState<string>("");

  const [stateFee, setStateFee] = useState(0);

  const orderSummary = [
    {
      title: "subtotal",
      value: subTotal,
    },
    {
      title: "shipping",
      value: stateFee,
    },
  ];

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      lga: "",
    },
  });

  const resetForm = () => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      lga: "",
    });
    setAddress("");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeUserStateLocationHandler = (e: any) => {
    if (e.target.value) setUserStateLocationErrorText("");
    setUserStateLocation(e.target.value);
  };

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    if (!address) {
      setAddressError("Please enter address");
      return;
    }
    if (address.length > 250) {
      setAddressError("Address should not exceed 250 characters");
      return;
    }

    console.log(data);

    resetForm();
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;

    if (userStateLocation) {
      timer = setTimeout(() => {
        const state = statesShippingFee.filter((item) =>
          item.state.toLowerCase().includes(userStateLocation.toLowerCase())
        )[0];
        if (state && state.state) {
          setStateFee(state.fee);
        } else {
          setStateFee(0);
        }
      }, 1000);
      return;
    } else {
      setStateFee(0);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [userStateLocation]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex justify-between"
    >
      <div className=" w-[50%] font-roboto">
        <div className=" flex flex-col ">
          <h4 className="text-[2rem] text-secondary-2 leading-[100%] mb-[2.4rem] font-semibold">
            Contact
          </h4>
          <div className="flex justify-between">
            <InputComponent
              placeholder={"Enter your first name"}
              type={"text"}
              register={register}
              error={errors}
              name={"firstName"}
              label="FIRST NAME"
              pl="pl-[2rem]"
              containerWidth="w-[48%]"
              validation={registrationOption.firstName}
              labelTextColor="text-secondary-1 text-[1.2rem]"
            />
            <InputComponent
              placeholder={"Enter your last name"}
              type={"text"}
              register={register}
              error={errors}
              name={"lastName"}
              label="LAST NAME"
              pl="pl-[2rem]"
              containerWidth="w-[48%]"
              validation={registrationOption.lastName}
              labelTextColor="text-secondary-1 text-[1.2rem]"
            />
          </div>
          <InputComponent
            placeholder={"Enter your email"}
            type={"email"}
            register={register}
            error={errors}
            name={"email"}
            label="EMAIL"
            pl="pl-[2rem]"
            containerWidth="w-full"
            labelTextColor="text-secondary-1 text-[1.2rem]"
            validation={registrationOption.email}
          />
          <InputComponent
            placeholder={"Enter your phone number"}
            type={"text"}
            register={register}
            error={errors}
            label="Phone number"
            labelTextColor="text-secondary-1 text-[1.2rem] uppercase"
            name={"phoneNumber"}
            pl="pl-[2rem]"
            validation={registrationOption.phoneNumber}
          />
        </div>
        <div className="mt-[2rem]">
          <h4 className="text-[2rem] text-secondary-2 leading-[100%] mb-[2.4rem] font-semibold">
            Delivery
          </h4>
          <div className="w-full flex flex-col mb-[2rem]">
            <label
              htmlFor="state"
              className="uppercase   mb-[.5rem] text-[1.2rem]"
            >
              State
            </label>
            <div className="w-full flex flex-col">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter your state"
                value={userStateLocation}
                onChange={onChangeUserStateLocationHandler}
                className={`${
                  userStateLocationErrorText
                    ? "border-red-500 text-red-500"
                    : "border-[rgba(237,237,237,1)]"
                } px-[2rem] py-[1.2rem] placeholder:text-[1.4rem] placeholder:text-[rgba(143,143,143,1)] bg-white border w-full ring-0 outline-none focus:ring-0 rounded-lg focus:outline-none `}
              />
              {userStateLocationErrorText && (
                <small className="text-red-500 mt-[0.5rem]">
                  {userStateLocationErrorText}
                </small>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <InputComponent
              placeholder={"Enter your city"}
              type={"text"}
              register={register}
              error={errors}
              label="City"
              labelTextColor="text-secondary-1 text-[1.2rem] uppercase"
              name={"city"}
              pl="pl-[2rem]"
              containerWidth="w-[48%]"
              validation={registrationOption.city}
            />
            <InputComponent
              placeholder={"Enter your LGA"}
              type={"text"}
              register={register}
              error={errors}
              label="LGA"
              labelTextColor="text-secondary-1 text-[1.2rem] uppercase"
              containerWidth="w-[48%]"
              name={"lga"}
              pl="pl-[2rem]"
              validation={registrationOption.lga}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-[0.5rem] text-[1.2rem] text-secondary-2 uppercase font-roboto">
              address
            </label>
            <textarea
              rows={4}
              maxLength={250}
              required
              value={address}
              placeholder="Enter your address"
              onChange={(e: { target: { value: string } }) => {
                setAddress(e.target.value);
              }}
              className="rounded-lg border bg-white placeholder:text-[1.4rem]  placeholder:text-[rgba(143,143,143,1)]  font-roboto  border-[rgba(237,237,237,1)] resize-none focus:ring-0 focus:outline-none outline-none ring-0 px-[2rem] py-[1.2rem] "
            />
            <small>{addressError}</small>
          </div>
        </div>
      </div>
      <div className="w-[40%] bg-[rgba(250,250,250,1)] p-[3rem] h-max">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item: CartItem) => {
              const price = item.item.price
                ? item.item.price
                : item.item.volumesPrices && item.item.volumesPrices[0].price;

              return (
                <div key={item.item.name} className="flex mb-[3.2rem] ">
                  <div className="w-[6rem] h-[6rem] relative">
                    <Image
                      src={item.item.image}
                      alt={`${item.item.name} image`}
                      priority
                      width={200}
                      height={200}
                      className="w-full h-full"
                    />
                    <div className="bg-[rgba(14,14,14,0.7)] w-[1.8rem] h-[1.8rem] rounded-full flex items-center justify-center text-[1.2rem] font-medium text-white absolute -top-[0.8rem] -right-[0.8rem]">
                      {item.choosenQty}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col ml-[1.6rem]">
                    <p className="text-secondary-2 font-medium text-[1.4rem] leading-[100%] tracking-[2%]">
                      {item.item.title}
                    </p>
                    <p className="mt-[1.2rem] text-[rgba(123,132,135,1)] text-[1.2rem]">
                      {item.item.name}
                    </p>
                    {item.item.volumesPrices && (
                      <p className="mt-[1rem] text-[rgba(123,132,135,1)] text-[1.2rem]">
                        {item.item.volumesPrices[0].volume}
                      </p>
                    )}
                  </div>
                  {price && (
                    <p className="text-secondary-2  font-semibold leading-[100%] tracking-[4%] text-[1.4rem] ml-[1rem] ">
                      ₦{formatAmount(String(price * item.choosenQty))}
                    </p>
                  )}
                </div>
              );
            })}
            <div className="border-t border-b border-[rgba(237,237,237,1)] py-[3.2rem]">
              {orderSummary.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between mb-[1.5rem] last:mb-0 font-roboto text-secondary-2"
                >
                  <p className="  capitalize">{item.title}</p>
                  <p>₦{formatAmount(String(item.value))}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-[2.4rem] text-secondary-2 font-semibold text-[2rem] leading-[100%]">
              <p className="capitalize">total</p>
              <p>₦{formatAmount(String(subTotal + stateFee))}</p>
            </div>
          </div>
        ) : (
          <p>You have no cart items</p>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
