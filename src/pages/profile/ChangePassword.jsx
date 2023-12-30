import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const current_password = form.current_password.value;
    const new_password = form.new_password.value;
    const confirm_new_password = form.confirm_new_password.value;

    if (new_password.length < 8) {
      toast.error("New Password must be at least 8 characters");
      setLoader(false);
    } else if (new_password !== confirm_new_password) {
      toast.error("New Password & Confirm New Password didn't match!");
      setLoader(false);
    } else {
      const formData = new FormData();
      formData.append("current_password", current_password);
      formData.append("new_password", new_password);
      formData.append("confirm_new_password", confirm_new_password);

      const headers = new Headers({
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      });

      const requestOptions = {
        method: "POST",
        headers,
        body: formData,
      };

      fetch(
        "https://api.pathshalait.com/api/v1/client/admin/change/password",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === true) {
            toast.success("Password changed successfully!");
            setLoader(false);
            navigate("/profile");
          } else {
            setLoader(false);
            toast.error(data.message);
            setLoader(false);
          }
        });
    }
  };

  return (
    <section className="mx-5 md:container md:mx-auto my-10 flex flex-col items-center gap-5">
      <h1 className="text-3xl">Change Password</h1>

      <form
        action=""
        onSubmit={handleChangePassword}
        className="flex flex-col gap-2.5 md:w-1/2 lg:w-1/3 shadow-xl rounded-xl p-5"
      >
        <div>
          <p>Enter current password</p>
          <div className="flex items-center mt-2 rounded-lg border border-blue px-2">
            <input
              className="w-full px-4 py-2 focus:outline-none"
              placeholder="Password"
              name="current_password"
              required
            />
            <AiOutlineEye
              className="mr-2 cursor-pointer text-xl"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div>
          <p>Enter new password</p>
          <div className="flex items-center mt-2 rounded-lg border border-blue px-2">
            <input
              className="w-full px-4 py-2 focus:outline-none"
              placeholder="Confirm Password"
              type={showPassword ? "text" : "password"}
              name="new_password"
              required
            />
            {showPassword ? (
              <AiOutlineEye
                className="mr-2 cursor-pointer text-xl"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="mr-2 cursor-pointer text-xl"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        <div>
          <p>Confirm new password</p>
          <div className="flex items-center mt-2 rounded-lg border border-blue px-2">
            <input
              className="w-full px-4 py-2 focus:outline-none"
              placeholder="Confirm Password"
              type={showPassword2 ? "text" : "password"}
              name="confirm_new_password"
              required
            />
            {showPassword2 ? (
              <AiOutlineEye
                className="mr-2 cursor-pointer text-xl"
                onClick={() => setShowPassword2(!showPassword2)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="mr-2 cursor-pointer text-xl"
                onClick={() => setShowPassword2(!showPassword2)}
              />
            )}
          </div>
        </div>
        <Button type="submit" className="bg-blue flex justify-center gap-2">
          Submit {loader && <Spinner className="h-4 w-4" />}{" "}
        </Button>
      </form>
    </section>
  );
}
