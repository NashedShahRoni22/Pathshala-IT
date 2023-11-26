import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginimg from "../../assets/auth/login.png";

export default function ForgetPassword() {
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (e) => {
      setLoader(true);
      e.preventDefault();
      const form = e.target;
      const number = form.number.value;
      const postData = {
        number,
      };
      // console.log(postData);
  
      const formData = new FormData();
      formData.append("phone_number", number);
  
      const requestOptions = {
        method: "POST",
        body: formData,
      };
  
      fetch("https://api.pathshalait.com/api/v1/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            // navigate("/");
            setLoader(false);
            // toast.success("Sign in successfully!");
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
        <div className="lg:w-1/2 shadow lg:shadow-none px-10 py-5 rounded">
          <h1 className="text-[24px]">Forget Password?</h1>
          <form
            onSubmit={handleLogin}
            action=""
            className="lg:w-2/3 flex flex-col gap-2 mt-[36px]"
          >
            <p className="">Phone Number</p>
            <input
              className="px-4 py-2 rounded-lg border border-blue focus:outline-blue"
              placeholder="Enter Phone Number"
              type="number"
              name="number"
              required
            />
            <Button
              type="submit"
              className="flex justify-center items-center gap-2 bg-blue"
            >
              Submit {loader && <Spinner className="h-4 w-4" />}
            </Button>
          </form>
        </div>
        <div className="hidden lg:block lg:w-1/2 bg-lightBlue rounded-xl">
          <img src={loginimg} alt="" />
        </div>
      </section>
    );
}
