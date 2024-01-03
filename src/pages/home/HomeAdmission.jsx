import React, { useEffect, useState } from "react";
import book from "../../assets/admissionTimeIcons/Book.png";
import calendar from "../../assets/admissionTimeIcons/Calendar.png";
import frame from "../../assets/admissionTimeIcons/Frame.png";
import hour from "../../assets/admissionTimeIcons/hour-glass.png";
import cube from "../../assets/admissionTimeIcons/Cube.png";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HomeAdmission() {
  const [admissionData, setAdmissionData] = useState(null);
  // console.log(admissionData);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.pathshalait.com/api/v1/public/admission"
      );
      const data = await response.json();
      setAdmissionData(data?.data);
    } catch (error) {
      console.error("Error fetching admission data:", error);
    }
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchData();

    // Set up an interval to fetch updated data every minute (adjust as needed)
    const intervalId = setInterval(fetchData, 1000); // Fetch every 60 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const calculateRemainingTime = () => {
    if (!admissionData) return 0;
    const { start_date, end_date } = admissionData;

    const admissionStartDate = new Date(start_date);
    const admissionEndDate = new Date(end_date);

    const now = new Date();
    let remainingTimeInSeconds;

    if (start_date && end_date) {
      remainingTimeInSeconds = Math.max(
        0,
        Math.floor((admissionEndDate - now) / 1000)
      );
    } else {
      const timeDifferenceInSeconds = Math.floor(
        (admissionEndDate - now) / 1000
      );
      const days = Math.floor(timeDifferenceInSeconds / (24 * 60 * 60));
      const hours = Math.floor(
        (timeDifferenceInSeconds % (24 * 60 * 60)) / (60 * 60)
      );
      const minutes = Math.floor((timeDifferenceInSeconds % (60 * 60)) / 60);
      const seconds = timeDifferenceInSeconds % 60;

      remainingTimeInSeconds =
        days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    }

    return remainingTimeInSeconds;
  };

  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / (60 * 60 * 24));
    const hours = Math.floor((timeInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    const seconds = timeInSeconds % 60;

    return (
      <div className="grid grid-cols-4 gap-2.5 lg:gap-5 my-5 lg:my-10">
        <div className="bg-white  px-2.5 lg:px-5 py-1 lg:py-2 rounded-xl">
          <p className="text-[24px] font-semibold lg:text-[60px] text-center">
            {days}
          </p>
          <p className="text-[16px] lg:text-[20px] text-center">Days</p>
        </div>
        <div className="bg-white  px-2.5 lg:px-5 py-1 lg:py-2 rounded-xl">
          <p className="text-[24px] font-semibold lg:text-[60px] text-center">
            {hours}
          </p>
          <p className="text-[16px] lg:text-[20px] text-center">Hours</p>
        </div>
        <div className="bg-white  px-2.5 lg:px-5 py-1 lg:py-2 rounded-xl">
          <p className="text-[24px] font-semibold lg:text-[60px] text-center">
            {minutes}
          </p>
          <p className="text-[16px] lg:text-[20px] text-center flex justify-center">
            Min<span className="hidden md:block">ute</span>s
          </p>
        </div>
        <div className="bg-white  px-2.5 lg:px-5 py-1 lg:py-2 rounded-xl">
          <p className="text-[24px] font-semibold lg:text-[60px] text-center">
            {seconds}
          </p>
          <p className="text-[16px] lg:text-[20px] text-center flex justify-center">
            Sec<span className="hidden md:block">ond</span>s{" "}
          </p>
        </div>
      </div>
    );
  };
  return (
    <section className="relative lg:min-h-[80vh] lg:flex lg:items-center">
      <div className="mx-5 md:container md:mx-auto z-10 bg-lightOrange p-5 lg:p-10 rounded-xl my-10">
        <h1 className="text-[40px] lg:text-[60px] text-center">
          Admission Time Left
        </h1>

        {formatTime(calculateRemainingTime())}

        <div className="flex flex-col gap-2.5 md:flex-row md:justify-between">
          <div>
            <div className="flex gap-4">
              <img className="h-[24px] w-[24px]" src={calendar} alt="" />
              <p className="text-[16px] lg:text-[20px]">
                {" "}
                Admission Starts: {admissionData?.start_date}
              </p>
            </div>
            <div className="flex gap-4 mt-2.5">
              <img className="h-[24px] w-[24px]" src={hour} alt="" />
              <p className="text-[16px] lg:text-[20px]">
                Admission Ends: {admissionData?.end_date}
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <img className="h-[24px] w-[24px]" src={book} alt="" />
              <p className="text-[16px] lg:text-[20px]">
                Class Starts: {admissionData?.class_start_date}
              </p>
            </div>
            <div className="flex gap-4 mt-2.5">
              <img className="h-[24px] w-[24px]" src={frame} alt="" />
              <p className="text-[16px] lg:text-[20px]">
                Batch Timing: {admissionData?.weekly_days} (
                {admissionData?.class_start_time} to{" "}
                {admissionData?.class_end_time})
              </p>
            </div>
          </div>
        </div>
        <div className="hidden mt-10 lg:flex justify-between items-center bg-blue p-5 rounded-xl">
          <p className="text-[16px] lg:text-[20px] text-white">
            If interested to take admission in {admissionData?.course?.name}
          </p>
          <Link to={`/course_details/${admissionData?.course?.course_slug}`} className="py-2 px-4 bg-white rounded flex items-center gap-2.5">
            Enroll Now <BsBook className="text-xl" />
          </Link>
        </div>
        <div className="mt-5 lg:hidden flex justify-center">
          <Link to={`/course_details/${admissionData?.course?.course_slug}`} className="py-2 px-4 bg-white rounded flex items-center gap-2.5">
            Enroll Now <BsBook className="text-xl" />
          </Link>
        </div>
      </div>
      <img
        src={cube}
        className="absolute top-0 left-0 hidden lg:block"
        alt=""
      />
    </section>
  );
}
