import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const handleRegisteration = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    // const number = form.number.value;
    const password = form.password.value;
    const confirmpassword = form.confirm_password.value;

    const postData = {
      name,
      email,
      number,
      password,
      confirmpassword,
    };
    // console.log(postData);

    if (password !==  confirmpassword) {
      toast.error("Password & Confirm Password didn't match!");
      setLoader(false);
    } 
    else if( number.length !== 11 ){
      toast.error("Enter a valid number");
      setLoader(false);
    }
    else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone_number", number);
      formData.append("password", password);
      formData.append("password_confirmation", confirmpassword);

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      fetch("https://api.pathshalait.com/api/v1/students", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            setLoader(false);
            navigate("/login");
            toast.success("User created successfully!");
          } else {
            setLoader(false);
            console.log(data);
          }
        });
    }
  };
  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20">
      <h2 className="text-3xl">Register</h2>
      <form
        onSubmit={handleRegisteration}
        action=""
        className="md:w-1/2 flex flex-col gap-2 my-5"
      >
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Enter Name"
          type="text"
          name="name"
          required
        />
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Enter Email"
          type="email"
          name="email"
          required
        />
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Enter Phone Number"
          type="number"
          name="number"
          onChange={e => setNumber(e.target.value)}
          required
        />
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Enter Password"
          type="password"
          name="password"
          required
        />
        <input
          className="px-4 py-2 rounded border border-blue focus:outline-blue"
          placeholder="Confirm Password"
          type="password"
          name="confirm_password"
          required
        />
        <button
          type="submit"
          className="py-2 flex justify-center bg-blue border border-blue hover:bg-transparent rounded text-white hover:text-blue duration-300 ease-linear font-semibold"
        >
          {loader ? <Spinner /> : "Register"}
        </button>
      </form>
      <Link to={"/login"}>
        Already have an account?{" "}
        <span className="text-blue">Please login.</span>{" "}
      </Link>
    </section>
  );
}
