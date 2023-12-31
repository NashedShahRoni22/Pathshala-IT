import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactCodeInput from "react-verification-code-input";

export default function ResetVerification() {
  const [loader, setLoader] = useState(false);
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const number = localStorage.getItem("phone_number");
  //verify otp
  const verifyOtp = () => {
    setLoader(true);
    fetch(`https://api.pathshalait.com/api/v1/forget/password/otp/verify/${code}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === true) {
          toast.success("Reset password!");
          navigate("/reset_password");
          setLoader(false);
          localStorage.removeItem("phone_number");
          localStorage.setItem("token", code);
        } else {
          console.log(data);
          setLoader(false);
        }
      });
  };
  
  //resent otp
  const resentCode = () => {
    setCode("")
    setLoader(true);
    fetch(`https://api.pathshalait.com/api/v1/resent/otp/${number}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          toast.success("OTP sent!");
          setLoader(false);
        } else {
          console.log(data);
          setLoader(false);
        }
      });
  };
  return (
    <section className="mx-5 md:container md:mx-auto min-h-[60vh] flex justify-center items-center">
      <form className="shadow px-5 py-10 flex flex-col items-center gap-3 rounded-lg w-full md:w-1/2 lg:w-1/3">
        <BsCheckCircleFill className="text-[40px] text-blue" />
        <h1 className="text-[24px]">Verification Code</h1>
        <p className="text-center text-[18px]">
          Enter the 6-digit code we've sent in your phone number
        </p>
        <ReactCodeInput
          fieldWidth="40px"
          fieldHeight="40px"
          className="text-center my-2.5"
          onChange={(value) => setCode(value)}
        />

        <p className="text-[16px]">
          Didn't get the code?{" "}
          <span className="underline text-blue cursor-pointer" onClick={resentCode}>Click to resend</span>{" "}
        </p>
        <div className="flex items-center gap-2.5">
          <Button
            onClick={() => navigate("/login")}
            size="sm"
            className="flex justify-center items-center gap-2"
          >
            Cancel
          </Button>
          <Button
            onClick={verifyOtp}
            size="sm"
            disabled={code === ""}
            className="bg-blue flex justify-center items-center gap-2"
          >
            Submit {loader && <Spinner className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </section>
  );
}
