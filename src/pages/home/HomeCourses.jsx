import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { PiStudentFill } from "react-icons/pi";
import Loader from "../../shared/loader/Loader";

export default function HomeCourses() {
  const [loader, setLoader] = useState(false);
  const [catLoader, setCatLoader] = useState(false);
  const [courses, setCourses] = useState();
  const [categories, setCategories] = useState();
  const [activeCourseId, setActiveCourseId] = useState("");
  //get categories
  useEffect(() => {
    setCatLoader(true);
    fetch("https://api.pathshalait.com/api/v1/category/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code === 200) {
          setCategories(data?.data);
          setCatLoader(false);
        } else {
          console.log(data);
          setCatLoader(false);
        }
      });
  }, []);

  //get courses
  useEffect(() => {
    setLoader(true);
    let url = "https://api.pathshalait.com/api/v1/course/list";
    if (activeCourseId) {
      url = `https://api.pathshalait.com/api/v1/course/list/${activeCourseId}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code === 200) {
          setCourses(data?.data);
          setLoader(false);
        } else {
          console.log(data);
          setLoader(false);
        }
      });
  }, [activeCourseId]);

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
      {/* categories buttons  */}
      <div className="mt-5 md:container md:mx-auto relative flex items-center gap-2">
        {/* Custom prev Buttons */}
        <button id="categorySwiper-prev">
          <BsFillArrowLeftCircleFill className="text-3xl text-blue" />
        </button>
        {catLoader ? (
          "Loading..."
        ) : (
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
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => setActiveCourseId("")}
                  className={`text-[18px] w-fit text-center py-2 px-4 shadow border border-blue rounded-full min-w-[200px] ${
                    activeCourseId === "" && "bg-blue text-white"
                  } `}
                >
                  All Courses
                </button>
              </div>
            </SwiperSlide>
            {categories?.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setActiveCourseId(s?.id)}
                    className={`text-[18px] w-fit text-center py-2 px-4 shadow border border-blue rounded-full min-w-[200px] ${
                      activeCourseId === s?.id && "bg-blue text-white"
                    } `}
                  >
                    {s.name}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom next Buttons */}
        <button id="categorySwiper-next">
          <BsFillArrowRightCircleFill className="text-3xl text-blue" />
        </button>
      </div>

      {/* courses cards  */}
      <div className={`md:container md:mx-auto relative`}>
        {loader ? (
          <Loader/>
        ) : (
          <Swiper
            id="cardSwiper"
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper py-10"
          >
            {courses?.map((c, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white shadow rounded-xl">
                  <img src={c?.course_image} alt="" className="min-w-full h-[240px] rounded-t-xl" />
                  <div className="p-4 flex flex-col gap-2.5">
                    <p className="text-[16px]">{c?.category_name}</p>
                    <p className="text-[20px] md:text-[24px]">{c?.name}</p>
                    <hr />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <BsStarFill className="md:text-xl text-orange" />
                        <BsStarFill className="md:text-xl text-orange" />
                        <BsStarFill className="md:text-xl text-orange" />
                        <BsStarFill className="md:text-xl text-orange" />
                        <BsStarHalf className="md:text-xl text-orange" />
                      </div>
                      <p className="text-[16px] flex gap-1 items-center">
                        {" "}
                        <PiStudentFill className="text-xl md:text-2xl text-blue" />{" "}
                        500+
                      </p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <p className="text-[16px] text-blue">
                        &#2547; {c?.online_amount}
                      </p>
                      <button className="flex gap-0.5 text-[16px] px-4 py-2 rounded-xl text-black border border-blue hover:bg-blue hover:text-white duration-300 ease-linear">
                        <span className="hidden md:block">Click For</span>
                        Discount
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
