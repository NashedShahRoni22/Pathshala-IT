import React from "react";
import img from "../../assets/coursesBarIcons/Digital Marketing.png";
import img2 from "../../assets/coursesBarIcons/Graphic  & Multimedia.png";
import img3 from "../../assets/coursesBarIcons/SEO.png";
import img4 from "../../assets/coursesBarIcons/soft skill.png";
import img5 from "../../assets/coursesBarIcons/Web & Soft.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function HomeCourseBar() {
  const services = [
    {
      img: img,
      name: "Digital Marketing",
    },
    {
      img: img2,
      name: "Graphic & Multimedia",
    },
    {
      img: img3,
      name: "Search Engine Optimization",
    },
    {
      img: img4,
      name: "Soft Skill",
    },
    {
      img: img5,
      name: "Web & Software",
    },
  ];
  return (
    <div className="py-5 mx-5 md:container md:mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper py-10"
      >
        {services.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow flex items-center justify-center gap-4 p-2.5 md:p-5 rounded-xl">
              <img src={s.img} alt="" className="h-[60px] w-[60px]" />
              <p className="text-[18px]">{s.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
