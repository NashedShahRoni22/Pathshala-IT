import React from "react";
import img from "../../assets/bannerImages/Rectangle 73.png";
import videoIcon from "../../assets/logo/video-icon.png";
import svg from "../../assets/choseUsIcons/Compass.png";

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
    <div className="relative">
      <h1 className="text-[40px] lg:text-[60px] text-center">Success Stories</h1>
      <div className="mx-5 md:container md:mx-auto my-5 lg:my-10 md:flex md:flex-wrap justify-center gap-[30px]">
        {data.map((d,i) => (
          <div key={i} className="relative my-[12px] md:my-0">
            <img src={d.img} alt="" className=""/>
            <div className="absolute top-0 h-full w-full flex justify-center items-center">
                <img src={videoIcon} alt="" className="h-[60px]" />
            </div>
          </div>
        ))}
      </div>
      <img src={svg} alt="" className="absolute left-0 top-0" />
    </div>
  );
}
