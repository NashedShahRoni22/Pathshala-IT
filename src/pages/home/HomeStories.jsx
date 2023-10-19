import React from "react";
import img from "../../assets/bannerImages/Rectangle 73.png";
import videoIcon from "../../assets/logo/video-icon.png";

export default function HomeStories() {
  const data = [
    {
      img: img,
      link: "/",
    },
    {
      img: img,
      link: "/",
    },
    {
      img: img,
      link: "/",
    },
    {
      img: img,
      link: "/",
    },
  ];
  return (
    <div>
      <h1 className="text-[60px] text-center">Success Stories</h1>
      <div className="mx-5 md:container md:mx-auto my-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((d) => (
          <div className="relative">
            <img src={d.img} alt="" />
            <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <img src={videoIcon} alt="" className="h-[60px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
