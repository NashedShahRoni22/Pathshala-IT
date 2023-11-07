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
      <h1 className="text-[40px] lg:text-[60px] text-center">
        Join free Seminars
      </h1>
      <div className="py-10 flex flex-col gap-8 lg:gap-16 items-center lg:flex-row">
        <div className="lg:w-1/2">
          {data.map((d, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 md:grid-cols-4 my-2.5 py-2.5 place-items-center border-b-2 hover:border-orange hover:shadow-xl duration-300 ease-linear ${i === 0 && 'border-t-2'} `}
            >
              <div>
                <h1 className="text-[24px] lg:text-[32px]">{d.day}</h1>
                <p className="text-[16px] lg:text-[20px]">
                  {d.month} / {d.year}
                </p>
              </div>

              <p className="hidden md:block text-[24px]">{d.title}</p>

              <div>
                <p className="md:hidden text-[20px]">{d.title}</p>
                <p className="text-[16px] lg:text-[20px]">{d.platform}</p>
                <p className="text-[16px] lg:text-[20px]">{d.time}</p>
              </div>
              <div>
                <button className="py-2 px-4 text-white bg-blue rounded flex items-center gap-2.5">
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
