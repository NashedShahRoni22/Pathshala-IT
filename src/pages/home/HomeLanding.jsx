import React, { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";
import img from "../../assets/bannerImages/Rectangle 70.png";
import img2 from "../../assets/bannerImages/Rectangle 71.png";
import img3 from "../../assets/bannerImages/Rectangle 72.png";
import img4 from "../../assets/bannerImages/Rectangle 9.png";
import { Link } from "react-router-dom";

export default function HomeLanding() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    transform: `perspective(1000px) rotateY(${isHovered ? 5 : 0}deg) rotateX(${
      isHovered ? 5 : 0
    }deg) scale3d(1, 1, 1)`,
  };
  return (
    <section className="bg-lightBlue py-20">
      <div className="mx-5 md:container md:mx-auto md:flex items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-[40px] lg:text-[64px] capitalize">
            Learn with industry leading experts
          </h1>
          <p className="text-[16px] lg:text-[20px] my-5 capitalize">
            We provide the best IT training around the world and we help young
            entrepreneurs, startups and established businesses grow.
          </p>
          <Link
            to="/courses"
            className="py-2 px-4 bg-blue text-white rounded flex items-center gap-2.5 w-fit group"
          >
            Load Courses <BsArrowClockwise className="text-xl group-hover:animate-spin" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="flex gap-4 my-4 justify-center items-end">
            <img
              src={img2}
              alt=""
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="landingImage h-[100px] w-[150px] lg:h-full lg:w-full"
            />
            <img
              src={img}
              alt=""
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="landingImage h-[200px] w-[140px] lg:h-full lg:w-full"
            />
          </div>
          <div className="flex gap-4 my-4 justify-center items-start">
            <img
              src={img3}
              alt=""
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="landingImage h-[80px] w-[115px] lg:h-full lg:w-full"
            />
            <img
              src={img4}
              alt=""
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="landingImage h-[160px] w-[220px] lg:h-full lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
