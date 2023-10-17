import React from "react";
import book from "../../assets/icons/Book.png";
import calendar from "../../assets/icons/Calendar.png";
import frame from "../../assets/icons/Frame.png";
import hour from "../../assets/icons/hour-glass.png";
import cube from "../../assets/icons/Cube.png";
import { BsBook } from "react-icons/bs";

export default function HomeAdmission() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="mx-5 md:container md:mx-auto bg-lightOrange p-10 rounded-xl my-10">
        <h1 className="text-[60px] text-center">Admission Time Left</h1>
        <div className="flex justify-center gap-5 my-16">
          <div className="bg-orange px-5 py-2.5 rounded-xl">
            <p className="text-[60px]">30</p>
            <p className="text-[20px]">Days</p>
          </div>
          <div className="bg-orange px-5 py-2.5 rounded-xl">
            <p className="text-[60px]">30</p>
            <p className="text-[20px]">Hours</p>
          </div>
          <div className="bg-orange px-5 py-2.5 rounded-xl">
            <p className="text-[60px]">58</p>
            <p className="text-[20px]">Minutes</p>
          </div>
          <div className="bg-orange px-5 py-2.5 rounded-xl">
            <p className="text-[60px]">59</p>
            <p className="text-[20px]">Seconds</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex gap-4">
              <img className="h-[24px] w-[24px]" src={calendar} alt="" />
              <p className="text-[20px]">
                {" "}
                Admission Starts: December 01, 2023
              </p>
            </div>
            <div className="flex gap-4">
              <img className="h-[24px] w-[24px]" src={hour} alt="" />
              <p className="text-[20px]">Admission Ends: December 31, 2023</p>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <img className="h-[24px] w-[24px]" src={book} alt="" />
              <p className="text-[20px]">Class Starts: December 01, 2023</p>
            </div>
            <div className="flex gap-4">
              <img className="h-[24px] w-[24px]" src={frame} alt="" />
              <p className="text-[20px]">
                Batch Timing: Friday & Saturday (06:00 PM to 08:30 PM)
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center bg-blue p-5 rounded-xl">
          <p className="text-[20px]">
            If interested to take admission in Digital Marketing
          </p>
          <button className="py-2 px-4 bg-white rounded flex items-center gap-2.5">
            Enroll Now <BsBook className="text-xl" />
          </button>
        </div>
      </div>
      <img src={cube} className="absolute top-0 left-0" alt="" />
    </section>
  );
}
