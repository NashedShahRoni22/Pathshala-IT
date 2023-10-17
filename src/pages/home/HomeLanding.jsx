import React, { useState } from "react";
import { BsBook } from "react-icons/bs";
import img from "../../assets/bannerImages/Rectangle 70.png";
import img2 from "../../assets/bannerImages/Rectangle 71.png";
import img3 from "../../assets/bannerImages/Rectangle 72.png";
import img4 from "../../assets/bannerImages/Rectangle 9.png";

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
      <div className="mx-5 md:container md:mx-auto lg:flex items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-[64px] capitalize">
            Learn with industry leading experts
          </h1>
          <p className="text-[20px] my-5 capitalize">
            We provide the best IT training around the world and we help young
            entrepreneurs, startups and established businesses grow.
          </p>
          <button className="py-2 px-4 bg-orange rounded flex items-center gap-2.5">
            Enroll Now <BsBook className="text-xl" />
          </button>
        </div>
        <div className="lg:w-1/2">
          <div className="flex gap-4 my-4 justify-center items-end">
            <img
              src={img2}
              alt=""
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="landingImage"
            />
            <img
              src={img}
              alt=""
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="landingImage"
            />
          </div>
          <div className="flex gap-4 my-4 justify-center items-start">
            <img
              src={img3}
              alt=""
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="landingImage"
            />
            <img
              src={img4}
              alt=""
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="landingImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
