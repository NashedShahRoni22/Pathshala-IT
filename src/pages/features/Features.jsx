import React from "react";
import { GoGoal } from "react-icons/go";

export default function Features() {
  const features = [
    "Skill Development",
    "Lifetime Support",
    "Freelance Marketplace",
    "Expert Mentors",
    "Live Class",
    "Recorded Class",
  ];
  return (
    <section className="mx-5 md:container md:mx-auto my-5 py-5">
      <h1 className="mb-5 text-[40px] lg:text-[60px] text-center">Our Features</h1>
      <div className="grid lg:grid-cols-2 gap-2.5 lg:gap-5">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-5 shadow-xl rounded-xl p-5 md:p-10"
          >
            {" "}
            <GoGoal className="text-[24px] md:text-[36px] text-blue" />{" "}
            <p className="text-[24px] md:text-[36px]">{f}</p>{" "}
          </div>
        ))}
      </div>
    </section>
  );
}
