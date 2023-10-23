import React from "react";
import book from "../../assets/admissionTimeIcons/Book.png";
import calendar from "../../assets/admissionTimeIcons/Calendar.png";
import frame from "../../assets/admissionTimeIcons/Frame.png";
import hour from "../../assets/admissionTimeIcons/hour-glass.png";
import cube from "../../assets/admissionTimeIcons/Cube.png";
import { BsBook } from "react-icons/bs";

export default function HomeAdmission() {
  return (
    <section className="relative lg:min-h-[80vh] lg:flex lg:items-center">
      <div className="mx-5 md:container md:mx-auto z-10 bg-lightOrange p-5 lg:p-10 rounded-xl my-10">
        <h1 className="text-[40px] lg:text-[60px] text-center">
          Admission Time Left
        </h1>
        <div className="grid grid-cols-4 gap-2.5 lg:gap-5 my-5 lg:my-10">
          <div className="bg-orange px-2.5 lg:px-5 py-1 lg:py-2 rounded-xl">
            <p className="text-[24px] lg:text-[60px] text-center">30</p>
            <p className="text-[16px] lg:text-[20px] text-center">Days</p>
          </div>
          <div className="bg-orange px-2.5 lg:px-5 py-1 lg:py-2 rounded-xl">
            <p className="text-[24px] lg:text-[60px] text-center">30</p>
            <p className="text-[16px] lg:text-[20px] text-center">Hours</p>
          </div>
          <div className="bg-orange px-2.5 lg:px-5 py-1 lg:py-2 rounded-xl">
            <p className="text-[24px] lg:text-[60px] text-center">58</p>
            <p className="text-[16px] lg:text-[20px] text-center flex justify-center">Min<span className="hidden md:block">ute</span>s</p>
          </div>
          <div className="bg-orange px-2.5 lg:px-5 py-1 lg:py-2 rounded-xl">
            <p className="text-[24px] lg:text-[60px] text-center">59</p>
            <p className="text-[16px] lg:text-[20px] text-center flex justify-center">Sec<span className="hidden md:block">ond</span>s </p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 md:flex-row md:justify-between">
          <div>
            <div className="flex gap-4">
              <img className="h-[24px] w-[24px]" src={calendar} alt="" />
              <p className="text-[16px] lg:text-[20px]">
                {" "}
                Admission Starts: December 01, 2023
              </p>
            </div>
            <div className="flex gap-4 mt-2.5">
              <img className="h-[24px] w-[24px]" src={hour} alt="" />
              <p className="text-[16px] lg:text-[20px]">
                Admission Ends: December 31, 2023
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <img className="h-[24px] w-[24px]" src={book} alt="" />
              <p className="text-[16px] lg:text-[20px]">
                Class Starts: December 01, 2023
              </p>
            </div>
            <div className="flex gap-4 mt-2.5">
              <img className="h-[24px] w-[24px]" src={frame} alt="" />
              <p className="text-[16px] lg:text-[20px]">
                Batch Timing: Friday & Saturday (06:00 PM to 08:30 PM)
              </p>
            </div>
          </div>
        </div>
        <div className="hidden mt-10 lg:flex justify-between items-center bg-blue p-5 rounded-xl">
          <p className="text-[16px] lg:text-[20px]">
            If interested to take admission in Digital Marketing
          </p>
          <button className="py-2 px-4 bg-white rounded flex items-center gap-2.5">
            Enroll Now <BsBook className="text-xl" />
          </button>
        </div>
        <div className="mt-5 lg:hidden flex justify-center">
          <button className="py-2 px-4 bg-blue rounded flex items-center gap-2.5">
            Enroll Now <BsBook className="text-xl" />
          </button>
        </div>
      </div>
      <img src={cube} className="absolute top-0 left-0 hidden lg:block" alt="" />
    </section>
  );
}
