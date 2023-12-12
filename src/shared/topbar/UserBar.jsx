import React, { useContext } from "react";
import { MdArrowOutward, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import userImg from "../../assets/about/user.png";
import { AuthContext } from "../../context/AuthProvider";

export default function UserBar({ handleLogOut }) {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-white p-[32px] rounded-xl">
      <div className="flex flex-col items-center">
        {user?.profile_image === null ? (
          <img src={userImg} alt="" className="h-[60px] w-[60px] rounded-full" />
        ) : (
          <img
            src={user?.profile_image}
            alt=""
            className="h-[60px] w-[60px] rounded-full"
          />
        )}
        <p className="text-[20px] md:text-[24px]">{user?.name}</p>
        <p className="text-[16px] md:text-[18px]">
          Student ID: {user?.student_id}
        </p>
        <Link
          to="/profile"
          className="py-[10px] px-[18px] bg-blue text-white rounded flex items-center gap-2.5 min-w-[160px] mt-[20px]"
        >
          View Profile <MdArrowOutward className="text-2xl" />
        </Link>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <Link className="border-b border-b-[#2222221A] py-1" to="/dashboard">
          Dashboard
        </Link>
        <Link to='/invoices' className="border-b border-b-[#2222221A] py-1">Invoices</Link>
        <Link className="border-b border-b-[#2222221A] py-1">Exams</Link>
        <Link
          onClick={handleLogOut}
          className="flex items-center gap-2 text-orange"
        >
          Log Out <MdLogout className="text-xl" />
        </Link>
      </div>
    </div>
  );
}
