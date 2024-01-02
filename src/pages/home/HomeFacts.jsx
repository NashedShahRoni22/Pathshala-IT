import React from "react";
import CountUp from "react-countup";

export default function HomeFacts() {
  const data =[
      {
        number: 5000,
        name: "Students",
      },
      {
        number: 5000,
        name: "Freelancers",
      },
      {
        number: 5000,
        name: "Job Holders",
      },
      {
        number: 5000,
        name: "Experts",
      },
      {
        number: 5000,
        name: "Ratio",
      },
      {
        number: 5000,
        name: "Companies",
      },
    ]
  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20">
      <h1 className="text-[40px] lg:text-[60px] text-center">Our Achivements</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[50px] mb-[120px]">
        {data.map((df, i) => (
          <div key={i} className="p-[20px] rounded-[8px] bg-lightBlue">
            <p className="text-[40px] text-blue text-center">
              <CountUp
                end={df.number}
                duration={10}
                style={{ fontWeight: "600" }}
              />
            </p>
            <p className="text-[20px] text-center text-black font-semibold">
              {df.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
