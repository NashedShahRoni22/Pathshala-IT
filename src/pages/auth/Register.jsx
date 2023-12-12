import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerimg from "../../assets/auth/register.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Register() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [gurdianNumber, setGurdianNumber] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisteration = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const dob = form.dob.value;
    const gurdianName = form.gurdianName.value;
    const password = form.password.value;
    const confirmpassword = form.confirm_password.value;

    // const postData = {
    //   name,
    //   email,
    //   number,
    //   dob,
    //   gurdianName,
    //   gurdianNumber,
    //   password,
    //   confirmpassword,
    // };

    if (password !== confirmpassword) {
      toast.error("Password & Confirm Password didn't match!");
      setLoader(false);
    } else if (number.length !== 11) {
      toast.error("Enter a valid BD number");
      setLoader(false);
    } else if (gurdianNumber.length !== 11) {
      toast.error("Enter a valid gurdian number");
      setLoader(false);
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone_number", number);
      formData.append("guardian_name", gurdianName);
      formData.append("guardian_number", gurdianNumber);
      formData.append("dob", dob);
      formData.append("password", password);
      formData.append("password_confirmation", confirmpassword);

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      fetch("https://api.pathshalait.com/api/v1/students", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status === true) {
            setLoader(false);
            navigate("/verification");
            localStorage.setItem("phone_number", number);
            toast.success("Verification code sent!");
          } else if (data?.status_code === 403) {
            navigate("/verification");
            toast.error(data?.message);
          } else {
            setLoader(false);
            toast.error(data.message);
            console.log(data);
          }
        });
    }
  };
  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20 flex justify-center lg:gap-8  lg:items-center">
      <div className="lg:w-1/2 shadow lg:shadow-none px-5 py-10 rounded">
        <h1 className="text-[40px]">Register</h1>
        <p className="text-[16px] mt-[8px]">
          Please fill your detail to create your account.
        </p>
        <form
          onSubmit={handleRegisteration}
          action=""
          className="grid md:grid-cols-2 gap-2.5 md:gap-4 mt-[36px]"
        >
          <div>
            <p>Name</p>
            <input
              className="mt-2 w-full px-4 py-2 rounded-lg border border-blue focus:outline-blue"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <p>Email</p>
            <input
              className="mt-2 w-full px-4 py-2 rounded-lg border border-blue focus:outline-blue"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </div>
          <div>
            <p>Number</p>
            <input
              className="mt-2 w-full px-4 py-2 rounded-lg border border-blue focus:outline-blue"
              placeholder="01"
              type="number"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <p>Date of Birth</p>
            <input
              type="date"
              name="dob"
              className="mt-2 w-full px-4 py-2 rounded-lg border border-blue focus:outline-blue"
              placeholder="Date of Birth"
              required
            />
          </div>
          <div>
            <p>Gurdian Name</p>
            <input
              type="text"
              name="gurdianName"
              className="mt-2 w-full px-4 py-2 rounded-lg border border-blue focus:outline-blue"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <p>Gurdian Number</p>
            <input
              type="number"
              onChange={(e) => setGurdianNumber(e.target.value)}
              className="mt-2 w-full px-4 py-2 rounded-lg border border-blue focus:outline-blue"
              placeholder="01"
              required
            />
          </div>
          <div>
            <p>Enter Password</p>
            <div className="flex items-center mt-2 rounded-lg border border-blue px-2">
              <input
                className="w-full px-4 py-2 focus:outline-none"
                placeholder="Password"
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
          </div>
          <div>
            <p>Confirm Password</p>
            <div className="flex items-center mt-2 rounded-lg border border-blue px-2">
              <input
                className="w-full px-4 py-2 focus:outline-none"
                placeholder="Confirm Password"
                type={showPassword ? "text" : "password"}
                name="confirm_password"
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
          </div>
          <Button
            type="submit"
            className="bg-blue flex justify-center items-center gap-2"
          >
            Register {loader && <Spinner className="h-4 w-4" />}
          </Button>
        </form>
        <div className="mt-[20px]">
          <Link to={"/login"}>
            Already have an account?{" "}
            <span className="text-blue">Please login.</span>{" "}
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 hidden lg:block bg-lightBlue rounded-xl">
        <img src={registerimg} alt="" />
      </div>
    </section>
  );
}
