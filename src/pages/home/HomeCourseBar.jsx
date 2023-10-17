import React from "react";
import img from "../../assets/coursesServicesIcons/noun-megaphone-5060368 1.png";
import img2 from "../../assets/coursesServicesIcons/noun-graphic-design-3867413 1.png";
import img3 from "../../assets/coursesServicesIcons/noun-seo-2894617 1.png";
import img4 from "../../assets/coursesServicesIcons/noun-social-media-6163564 1.png";

export default function HomeCourseBar() {
  const services = [
    {
      img: img,
      name: "Digital Marketing",
    },
    {
      img: img2,
      name: "Graphic Design",
    },
    {
      img: img3,
      name: "Search Engine Optimization",
    },
    {
      img: img4,
      name: "Social Media Management",
    },
  ];
  return (
    <div className="flex justify-center gap-4 py-5 -mt-16">
      {services.map((s, i) => (
        <div
          key={i}
          className="bg-white shadow-xl flex items-center gap-4 p-5 rounded-xl"
        >
          <img src={s.img} alt="" className="h-[60px] w-[60px]" />
          <p className="text-[20px]">{s.name}</p>
        </div>
      ))}
    </div>
  );
}
