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

import Loader from "../../shared/loader/Loader";
import CourseCard from "../courses/CourseCard";
import SmallLoader from "../../shared/loader/SmallLoader";

export default function HomeCourses() {
  const [loader, setLoader] = useState(false);
  const [catLoader, setCatLoader] = useState(false);
  const [courses, setCourses] = useState([]);
  // console.log(courses);
  const [categories, setCategories] = useState([]);
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
          <BsFillArrowLeftCircleFill className="text-3xl text-blue bg-white lg:bg-none rounded-full p-0.5" />
        </button>
        {catLoader ? (
          <SmallLoader />
        ) : (
          <Swiper
            id="categorySwiper"
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper py-5 md:py-10"
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
          <BsFillArrowRightCircleFill className="text-3xl text-blue bg-white lg:bg-none rounded-full p-0.5" />
        </button>
      </div>

      {/* courses cards  */}
      <div className='md:container md:mx-auto relative'>
        {/* Custom prev Buttons */}
        <button id="courseSwiper-prev" className="absolute -left-0 lg:-left-10 top-1/3 z-50">
          <BsFillArrowLeftCircleFill className="text-3xl md:text-4xl text-blue bg-white lg:bg-none rounded-full p-0.5" />
        </button>
        {/* Custom next Buttons */}
        <button id="courseSwiper-next" className="absolute -right-0 lg:-right-10 top-1/3 z-50">
          <BsFillArrowRightCircleFill className="text-3xl md:text-4xl text-blue bg-white lg:bg-none rounded-full p-0.5" />
        </button>
        {loader ? (
          <Loader />
        ) : (
          <>
            {courses?.length > 0 ? (
              <Swiper
                id="cardSwiper"
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination, Navigation]}
                className="mySwiper pb-20"
                navigation={{
                  nextEl: "#courseSwiper-next",
                  prevEl: "#courseSwiper-prev",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                
              >
                {courses?.map((c, i) => (
                  <SwiperSlide key={i}>
                    <CourseCard c={c} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-center text-xl py-16 shadow-xl rounded-xl">
                No Course Available Now
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
