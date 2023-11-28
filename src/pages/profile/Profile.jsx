import React, { useState } from "react";
import userImg from "../../assets/about/user.png";
import { FaEdit } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { Button } from "@material-tailwind/react";
import img from "../../assets/auth/login.png";

export default function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("User_Info"));
  const [edit, setEdit] = useState(false);
  return (
    <div className="mx-5 md:container lg:w-1/3 md:mx-auto py-10 my-10 shadow rounded p-8">
      <div className="flex justify-between">
        <h1 className="text-[20px] md:text-[24px]">My Profile</h1>
        <button
          onClick={() => setEdit(!edit)}
          className="flex items-center gap-1.5 text-orange"
        >
          {" "}
          <FaEdit /> { !edit ? "Edit" : "Cancel"}
        </button>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:gap-8 mt-8">
        <div className="flex flex-col items-center gap-2">
          <img src={userImg} alt="" />
          <button className="flex items-center gap-1.5 px-2 py-1 bg-blue text-white rounded">
            {" "}
            <RxUpdate /> Change{" "}
          </button>
        </div>
        {!edit ? (
          <div>
            <h1 className="text-[18px] md:text-[22px]">Student ID:</h1>
            <p className="text-[20px] md:text-[24px]">{userInfo.student_id_number}</p>
            <h1 className="text-[18px] md:text-[22px]">Full Name</h1>
            <p className="text-[20px] md:text-[24px]">{userInfo.name}</p>
            <h1 className="text-[18px] md:text-[22px]">Email</h1>
            <p className="text-[20px] md:text-[24px]">{userInfo.email}</p>
            <h1 className="text-[18px] md:text-[22px]">Phone</h1>
            <p className="text-[20px] md:text-[24px]">
              {userInfo.phone_number}
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-2">
            <h1 className="text-[18px] md:text-[22px]">Full Name</h1>
            <input className="text-[20px] md:text-[24px] border border-gray-300 focus:outline-blue px-2 py-1 rounded" defaultValue={userInfo.name} />
            <h1 className="text-[18px] md:text-[22px]">Email</h1>
            <input className="text-[20px] md:text-[24px] border border-gray-300 focus:outline-blue px-2 py-1 rounded" defaultValue={userInfo.email} />
            <Button className="bg-blue" >Update</Button>
          </form>
        )}
      </div>
    </div>
  );
}
