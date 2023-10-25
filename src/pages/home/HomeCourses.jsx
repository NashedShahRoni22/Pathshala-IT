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

export default function HomeCourses() {
  const data = {
    categories: [
      {
        name: "All Courses",
      },
      {
        name: "Graphic & Multimedia",
      },
      {
        name: "Web & Software",
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
    ],
    cards: [
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
    ],
  };

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

      <div className="py-5 my-10 mx-5 md:container md:mx-auto relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
          className="mySwiper"
        >
          {data.categories.map((s, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <p className="text-[18px] w-fit text-center py-2 px-4 shadow border border-black rounded-full">
                {s.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 -left-5 md:-left-10 swiper-button-prev"></div>
        <div className="absolute top-1/2 -right-5 md:-right-10 swiper-button-next"></div>
      </div>
      
      <div className="py-5 my-10 mx-5 md:container md:mx-auto relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.cards.map((c, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow rounded-b-xl">
                <img src={c.img} alt="" className="w-full" />
                <div className="p-4 flex flex-col gap-2.5">
                  <p className="text-[16px]">{c.categorey}</p>
                  <p className="text-[24px]">{c.name}</p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <BsStarFill className="text-2xl text-orange" />
                      <BsStarFill className="text-2xl text-orange" />
                      <BsStarFill className="text-2xl text-orange" />
                      <BsStarFill className="text-2xl text-orange" />
                      <BsStarHalf className="text-2xl text-orange" />
                    </div>
                    <p className="text-[16px]">{c.students}+ Students</p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <p className="text-[16px]">Fee: {c.fee} BDT</p>
                    <button className="text-[16px] px-4 py-2 rounded-xl border border-black">
                      Click For Discount
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 -left-5 md:-left-10 swiper-button-prev"></div>
        <div className="absolute top-1/2 -right-5 md:-right-10 swiper-button-next"></div>
      </div>
    </section>
  );
}
