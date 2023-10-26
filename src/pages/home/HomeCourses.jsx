import React from "react";
import img from "../../assets/coursesBarIcons/CourseImage.png";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import {PiStudentFill} from "react-icons/pi"

export default function HomeCourses() {
  const categories = [
    {
      name: "All Courses",
    },
    {
      name: "Graphics Design & Multimedia",
    },
    {
      name: "Web Design & Developemnt",
    },
    {
      name: "Digital Marketing",
    },
    {
      name: "Cyber Security",
    },
    {
      name: "Networking & Communication",
    },
  ];
  const cards = [
    {
      img: img,
      categorey: "Graphic & Multimedia",
      name: "MERN Stack Development",
      students: 500,
      fee: 10000,
    },
    {
      img: img,
      categorey: "Web & Software",
      name: "MERN Stack Development",
      students: 500,
      fee: 10000,
    },
    {
      img: img,
      categorey: "Digital Marketing",
      name: "MERN Stack Development",
      students: 500,
      fee: 10000,
    },
    {
      img: img,
      categorey: "Cyber Security",
      name: "MERN Stack Development",
      students: 500,
      fee: 10000,
    },
  ];

  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20">
      <h1 className="text-[40px] lg:text-[60px] text-center">
        Popular Courses
      </h1>
      <p className="text-[16px] text-center">
        We have designed our courses with the most demanding professional
        skills. <br />
        The knowledge, experience, and expertise gained through the program will
        ensure your desired job in the global market.
      </p>

      <div className="mt-5 md:container md:mx-auto relative flex items-center gap-2">
        {/* Custom prev Buttons */}
        <button id="categorySwiper-prev">
          <BsFillArrowLeftCircleFill className="text-3xl" />
        </button>

        <Swiper
          id="categorySwiper"
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: "#categorySwiper-next",
            prevEl: "#categorySwiper-prev",
          }}
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
          modules={[Navigation]}
          className="mySwiper py-5"
        >
          {categories.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center items-center">
                <p className="text-[18px] w-fit text-center py-2 px-4 shadow border border-black rounded-full">
                  {s.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom next Buttons */}
        <button id="categorySwiper-next">
          <BsFillArrowRightCircleFill className="text-3xl" />
        </button>
      </div>

      <div className="mb-5 md:container md:mx-auto relative flex items-center gap-2">
        {/* Custom prev Buttons */}
        <button id="cardSwiper-prev">
          <BsFillArrowLeftCircleFill className="text-3xl" />
        </button>

        <Swiper
          id="cardSwiper"
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: "#cardSwiper-next",
            prevEl: "#cardSwiper-prev",
          }}
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper py-5"
        >
          {cards.map((c, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow rounded-b-xl">
                <img src={c.img} alt="" className="w-full" />
                <div className="p-4 flex flex-col gap-2.5">
                  <p className="text-[16px]">{c.categorey}</p>
                  <p className="text-[20px] md:text-[24px]">{c.name}</p>
                  <hr />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <BsStarFill className="md:text-2xl text-orange" />
                      <BsStarFill className="md:text-2xl text-orange" />
                      <BsStarFill className="md:text-2xl text-orange" />
                      <BsStarFill className="md:text-2xl text-orange" />
                      <BsStarHalf className="md:text-2xl text-orange" />
                    </div>
                    <p className="text-[16px] flex gap-1 items-center"> <PiStudentFill className="text-xl md:text-2xl"/> {c.students}+</p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] text-orange">&#2547; {c.fee}</p>
                    <button className="flex gap-0.5 text-[16px] px-4 py-2 rounded-xl text-black border border-black hover:bg-orange hover:border-orange hover:text-white duration-300 ease-linear">
                      <span className="hidden md:block">Click For</span>Discount
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom next Buttons */}
        <button id="cardSwiper-next">
          <BsFillArrowRightCircleFill className="text-3xl" />
        </button>
      </div>
    </section>
  );
}
