import React, { useState } from "react";
import img from "../../assets/coursesBarIcons/CourseImage.png";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HomeCourses() {
  const data = {
    categories: [
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

  const CustomNextArrow = (props) => (
    <button className="slick-arrow slick-next" onClick={props.onClick}>
      Next
    </button>
  );

  const CustomPrevArrow = (props) => (
    <button className="slick-arrow slick-prev" onClick={props.onClick}>
      Prev
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Show 1 item on small screens
    slidesToScroll: 1, // Scroll 1 item at a time
    initialSlide: 0,
    // centerMode: true,
    nextArrow: <CustomNextArrow />, // Custom next button
    prevArrow: <CustomPrevArrow />, // Custom previous button
    responsive: [
      {
        breakpoint: 640, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768, // For medium screens
        settings: {
          slidesToShow: 4, // Show 4 items for medium screens
          slidesToScroll: 4,
          initialSlide: 0,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024, // For large screens
        settings: {
          slidesToShow: 6, // Show 6 items for large screens
          slidesToScroll: 6,
          infinite: false,
          centerMode: false,
        },
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
      {/* <div className="flex justify-center gap-4 mt-10"> */}
      <Slider {...settings} className="my-10">
        {data.categories.map((c, i) => (
          <div key={i} className="mx-1 lg:mx-2">
            <button className="text-[16px] px-2 lg:px-4 py-1 lg:py-2 rounded-full border border-black">
              {c.name}
            </button>
          </div>
        ))}
      </Slider>
      {/* </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
        {data.cards.map((c, i) => (
          <div key={i} className="bg-white shadow rounded-b-xl">
            <img src={c.img} alt="" />
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
        ))}
      </div>
    </section>
  );
}
