import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import ReactCodeInput from "react-verification-code-input";

export default function Verification() {
  const [code, setCode] = useState("");
  console.log(code);
  return (
    <section className="mx-5 md:container md:mx-auto min-h-[60vh] flex justify-center items-center">
      <form
        action=""
        className="shadow px-5 py-10 flex flex-col items-center gap-3 rounded-lg w-full md:w-1/2 lg:w-1/3"
      >
        <BsCheckCircleFill className="text-[40px] text-blue" />
        <h1 className="text-[24px]">Verification Code</h1>
        <p className="text-center text-[18px]">
          Enter the 6-digit code we've sent in your phone number
        </p>
        {/* <input
          type="number"
          className="w-full px-4 py-2 rounded-lg border border-blue focus:outline-blue"
        /> */}
        <ReactCodeInput
          fieldWidth="40px"
          fieldHeight="40px"
          className="text-center my-2.5"
          onChange={(value) => setCode(value)}
        />

        <p className="text-[16px]">
          Didn't get the code? <span className="underline text-blue">Click to resend</span>{" "}
        </p>
        <div className="flex items-center gap-2.5">
          <Button
            type="submit"
            size="sm"
            className="flex justify-center items-center gap-2"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="sm"
            className="bg-blue flex justify-center items-center gap-2"
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
