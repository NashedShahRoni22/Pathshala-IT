import React from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { GiVideoConference } from "react-icons/gi";
import { CgMathPercent } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function MiddleBar() {
  return (
    <div className="flex justify-center bg-white/90 rounded-[16px]">
      <Link
        to="/join_seminar"
        className="px-3 py-3 hover:bg-blue hover:text-white rounded-l-full flex items-center gap-1"
      >
        <GiVideoConference className="text-xl" /> Seminar
      </Link>
      <Link
        to="/courses"
        className="px-3 py-3 hover:bg-blue hover:text-white flex items-center gap-1"
      >
        {" "}
        <SiGoogleclassroom className="text-xl" /> Courses
      </Link>
      <Link
      to="/discount_form"
        className="px-3 py-3 hover:bg-blue hover:text-white rounded-r-full flex items-center gap-1"
      >
        <CgMathPercent className="text-xl" /> Discount
      </Link>
    </div>
  );
}
