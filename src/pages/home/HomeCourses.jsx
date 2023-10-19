import React from "react";
import img from "../../assets/coursesBarIcons/CourseImage.png";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

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
        name: "Networking Technology",
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
    <section className="mx-5 md:container md:mx-auto my-20">
      <h1 className="text-[60px] text-center">Popular Courses</h1>
      <p className="text-[16px] text-center">
        We have designed our courses with the most demanding professional
        skills. <br />
        The knowledge, experience, and expertise gained through the program will
        ensure your desired job in the global market.
      </p>
      <div className="flex justify-center gap-4 mt-10">
        {data.categories.map((c, i) => (
          <button
            key={i}
            className="text-[16px] px-4 py-2 rounded-full border border-black"
          >
            {c.name}
          </button>
        ))}
      </div>

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
