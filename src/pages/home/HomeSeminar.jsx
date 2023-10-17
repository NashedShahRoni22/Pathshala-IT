import React from "react";
import img from "../../assets/seminar/Rectangle 77.png";

export default function HomeSeminar() {
  const data = [
    {
      day: "06",
      month: "Nov",
      year: "23",
      title: "Digital Marketting",
      platform: "Online",
      time: "08:08 PM",
      link: "/",
    },
    {
      day: "06",
      month: "Nov",
      year: "23",
      title: "Digital Marketting",
      platform: "Online",
      time: "08:08 PM",
      link: "/",
    },
    {
      day: "06",
      month: "Nov",
      year: "23",
      title: "Digital Marketting",
      platform: "Online",
      time: "08:08 PM",
      link: "/",
    },
    {
      day: "06",
      month: "Nov",
      year: "23",
      title: "Digital Marketting",
      platform: "Online",
      time: "08:08 PM",
      link: "/",
    },
  ];
  return (
    <div className="mx-5 md:container md:mx-auto my-10 py-10">
      <h1 className="text-[60px] text-center">Join free Seminars</h1>
      <div className="py-10 flex flex-col gap-8 lg:gap-16 items-center lg:flex-row">
        <div className="lg:w-1/2">
          {data.map((d, i) => (
            <div
              key={i}
              className="grid grid-cols-4 my-2.5 py-2.5 place-items-center border-b-2 hover:border-orange hover:shadow-xl duration-300 ease-linear"
            >
              <div>
                <p className="text-[32px]">{d.day}</p>
                <p className="text-[20px]">
                  {d.month} / {d.year}
                </p>
              </div>

              <p className="text-[24px]">{d.title}</p>

              <div className="text-[20px]">
                <p>{d.platform}</p>
                <p>{d.time}</p>
              </div>
              <div>
                <button className="py-2 px-4 bg-blue rounded flex items-center gap-2.5">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
