import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const number = form.number.value;
    const password = form.password.value;
    const postData = {
      number,
      password,
    };
    // console.log(postData);

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
        if (data.status) {
          navigate("/");
          setLoader(false);
          localStorage.setItem("access_token", data?.data?.access_token);
          localStorage.setItem("User_Info", JSON.stringify(data?.data));
          toast.success("Sign in successfully!");
        } else {
          setLoader(false);
          toast.error(
            "Phone number or Password does not match with our record."
          );
        }
      });
  };
  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20">
      <h2 className="text-3xl">Login</h2>
      <form
        onSubmit={handleLogin}
        action=""
        className="md:w-1/2 flex flex-col gap-2 my-5"
      >
        <input
          className="px-4 py-2 rounded-lg border border-blue focus:outline-blue"
          placeholder="Enter Phone Number"
          type="number"
          name="number"
          required
        />
        <input
          className="px-4 py-2 rounded-lg border border-blue focus:outline-blue"
          placeholder="Enter Password"
          type="password"
          name="password"
          required
        />
        <Button
          type="submit"
          className="flex justify-center items-center gap-2 bg-blue"
        >
          Login {loader && <Spinner />}
        </Button>
      </form>
      <Link to={"/register"}>
        New Here ? <span className="text-blue">Please create an account.</span>{" "}
      </Link>
    </section>
  );
}
