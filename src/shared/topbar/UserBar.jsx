import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { MdArrowOutward, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import userImg from "../../assets/about/user.png";

export default function UserBar() {
  return (
    <div className="bg-white p-[32px] rounded-xl">
      <div className="flex flex-col items-center">
        <img src={userImg} />
        <p className="text-[20px] md:text-[24px]">Student Name</p>
        <p className="text-[16px] md:text-[18px]">Student ID: GD3-1234</p>
        <Link
          to="/profile"
          className="py-[10px] px-[18px] bg-blue text-white rounded flex items-center gap-2.5 min-w-[160px] mt-[20px]"
        >
          View Profile <MdArrowOutward className="text-2xl" />
        </Link>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <Link className="border-b border-b-[#2222221A] py-1">Courses</Link>
        <Link className="border-b border-b-[#2222221A] py-1">Services</Link>
        <Link className="border-b border-b-[#2222221A] py-1">Invoices</Link>
        <Link className="border-b border-b-[#2222221A] py-1">Exams</Link>
        <Link
          onClick={() => localStorage.clear()}
          className="flex items-center gap-2 text-orange"
        >
          Log Out <MdLogout className="text-xl" />
        </Link>
      </div>
    </div>
  );
}
