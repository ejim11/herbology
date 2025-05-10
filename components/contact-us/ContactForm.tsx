"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { sendMessage } from "@/utils/sendMessage";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

const ContactUsForm = () => {
  const [message, setMessage] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");

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
    },
  });

  const resetForm = () => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
    });
    setMessage("");
  };

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    if (!message) {
      setMsgError("Please enter some message");
      return;
    }
    if (message.length > 150) {
      setMsgError("Message should not exceed 150 characters");
      return;
    }

    const contactStr = `Hello I want to contact you on: \n \n Message:${message} \n ${data.firstName} ${data.lastName} \n ${data.email}`;

    sendMessage(contactStr);

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex justify-between">
        <InputComponent
          placeholder={"Enter your first name"}
          type={"text"}
          register={register}
          error={errors}
          name={"firstName"}
          label="FIRST NAME"
          pl="pl-[1rem]"
          containerWidth="w-[47%]"
          validation={registrationOption.firstName}
          labelTextColor="text-[rgba(45,80,82,1)]"
        />
        <InputComponent
          placeholder={"Enter your last name"}
          type={"text"}
          register={register}
          error={errors}
          name={"lastName"}
          label="LAST NAME"
          pl="pl-[1rem]"
          containerWidth="w-[47%]"
          validation={registrationOption.lastName}
          labelTextColor="text-[rgba(45,80,82,1)]"
        />
      </div>

      <InputComponent
        placeholder={"Enter your email"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        label="EMAIL"
        pl="pl-[1rem]"
        containerWidth="w-full"
        labelTextColor="text-[rgba(45,80,82,1)]"
        validation={registrationOption.email}
      />

      <div className="flex flex-col w-full">
        <label className="mb-[0.5rem] text-[1.4rem] text-[rgba(45,80,82,1)] font-roboto">
          MESSAGE
        </label>
        <textarea
          rows={4}
          maxLength={150}
          required
          value={message}
          placeholder="Leave us a message"
          onChange={(e: { target: { value: string } }) => {
            setMessage(e.target.value);
          }}
          className="rounded-lg border bg-white placeholder:text-[rgba(143,143,143,1)]  font-roboto  border-[rgba(237,237,237,1)] resize-none focus:ring-0 focus:outline-none outline-none ring-0 p-[1rem] "
        />
        <small>{msgError}</small>
      </div>
      <button
        disabled={!message}
        type="submit"
        className="mt-[3.2rem]  w-full py-[2rem] text-center text-[1.4rem]  font-roboto rounded-[0.8rem] disabled:bg-[rgba(27,61,63,0.5)] text-white bg-secondary-2 leading-[100%] tracking-[0.1rem] uppercase "
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactUsForm;
