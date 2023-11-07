import React from "react";
import img from "../../assets/coursesBarIcons/noun-megaphone-5060368 1.png";
import img2 from "../../assets/coursesBarIcons/noun-graphic-design-3867413 1.png";
import img3 from "../../assets/coursesBarIcons/noun-seo-2894617 1.png";
import img4 from "../../assets/coursesBarIcons/noun-social-media-6163564 1.png";

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
    <div className="py-5 mx-5 md:container md:mx-auto relative">
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
