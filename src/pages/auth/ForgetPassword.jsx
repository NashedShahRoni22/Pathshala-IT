import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginimg from "../../assets/auth/login.png";

export default function ForgetPassword() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  //handle otp send
  const handleSendOtp = (e) => {
    e.preventDefault()
    setLoader(true);
    const number = e.target.number.value;
    fetch(`https://api.pathshalait.com/api/v1/forget/password/${number}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === true) {
          navigate("/reset_verification");
          setLoader(false);
          localStorage.setItem("phone_number", number);
        } else {
          setLoader(false);
          toast.error(
            "Phone number or Password does not match with our record."
          );
        }
      });
  };
  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20 flex justify-center lg:items-center">
      <div className="lg:w-1/2 shadow lg:shadow-none p-5 rounded">
        <h1 className="text-[24px]">Forget Password?</h1>
        <form
          onSubmit={handleSendOtp}
          action=""
          className="lg:w-2/3 flex flex-col gap-2.5 my-5"
        >
          <p>Phone number which you have used to create account</p>
          <input
            className="px-4 py-2 rounded-lg border border-blue focus:outline-blue"
            placeholder="01"
            type="number"
            name="number"
            required
          />
          <Button
            type="submit"
            className="flex justify-center items-center gap-2 bg-blue"
          >
            Next {loader && <Spinner className="h-4 w-4" />}
          </Button>
        </form>
        <Link to="/login" className="">
          I have remember my password | <span className="text-blue">Login</span>{" "}
        </Link>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-lightBlue rounded-xl">
        <img src={loginimg} alt="" />
      </div>
    </section>
  );
}
