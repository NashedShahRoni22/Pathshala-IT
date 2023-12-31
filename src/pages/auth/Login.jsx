import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginimg from "../../assets/auth/login.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

export default function Login() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [showSentOtp, setShowSentOtp] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const number = form.number.value;
    const password = form.password.value;

    const formData = new FormData();
    formData.append("phone_number", number);
    formData.append("password", password);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("https://api.pathshalait.com/api/v1/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          navigate("/");
          setLoader(false);
          localStorage.setItem("access_token", data?.data?.access_token);
          localStorage.setItem("User_Info", JSON.stringify(data?.data));
          toast.success(data?.message);
          window.location.reload();
        } else if (data.status === false) {
          setShowSentOtp(true);
          setLoader(false);
          localStorage.setItem("phone_number", number);
          toast.error(data?.message);
        } else {
          setLoader(false);
          toast.error(data?.message);
        }
      });
  };

  //resent otp
  const resentCode = () => {
    fetch(
      `https://api.pathshalait.com/api/v1/resent/otp/${localStorage.getItem(
        "phone_number"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          toast.success("OTP sent!");
          navigate("/verification");
        } else {
          console.log(data);
        }
      });
  };

  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20 flex justify-center lg:items-center">
      <div className="lg:w-1/2 shadow lg:shadow-none px-10 py-5 rounded">
        <div className="flex justify-between items-center">
          <h1 className="text-[40px]">Login</h1>

          {showSentOtp && (
            <button
              onClick={resentCode}
              className="bg-blue h-fit px-4 py-2 text-white rounded-full shadow"
              size="sm"
            >
              Verify Now
            </button>
          )}
        </div>

        <p className="text-[16px]">
          Please fill your detail to access your account.
        </p>

        <form
          onSubmit={handleLogin}
          action=""
          className="lg:w-2/3 flex flex-col gap-2 mt-[36px]"
        >
          <p className="">Phone Number</p>
          <div className="flex items-center border border-blue px-2 rounded-lg">
            <input
              className="px-4 py-2 focus:outline-none flex-1"
              placeholder="Enter Phone Number"
              type="number"
              name="number"
              required
            />
            <FaPhoneAlt className="mr-2" />
          </div>
          <p className="mt-[20px]">Password</p>
          <div className="flex items-center border border-blue px-2 rounded-lg">
            <input
              className="px-4 py-2 focus:outline-none flex-1"
              placeholder="Enter Password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
            />
            {showPassword ? (
              <AiOutlineEye
                className="mr-2 cursor-pointer"
                onClick={handleClickShowPassword}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="mr-2 cursor-pointer"
                onClick={handleClickShowPassword}
              />
            )}
          </div>
          <div className="flex justify-end">
            <Link to="/forget_password" className="text-blue">
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            className="flex justify-center items-center gap-2 bg-blue"
          >
            Login {loader && <Spinner className="h-4 w-4" />}
          </Button>
        </form>
        <div className="mt-[20px]">
          <Link to={"/register"}>
            Don’t have an account?{" "}
            <span className="text-blue">Create an account.</span>{" "}
          </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-lightBlue rounded-xl">
        <img src={loginimg} alt="" />
      </div>
    </section>
  );
}
