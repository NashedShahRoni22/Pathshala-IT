import React from "react";
import icon from "../../assets/choseUsIcons/bxs-shapes.svg.png";
import vector from "../../assets/choseUsIcons/Vector.png";

export default function HomeChoseUs() {
  const data = [
    {
      img: icon,
      title: "Lifetime Support",
      content:
        "Pathshala IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24 hours service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.",
    },
    {
      img: icon,
      title: "Career Placement Support",
      content:
        "Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager. So far this department has helped more than 16000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 66% in 2023.",
    },
    {
      img: icon,
      title: "Recorded Videos",
      content:
        "No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.",
    },
  ];
  return (
    <section className="relative lg:min-h-[80vh] flex justify-center items-center">
      <div className="z-10">
        <div className="mx-5 md:container md:mx-auto my-5 lg:my-10 py-5 lg:py-10">
          <h1 className="text-[40px] lg:text-[60px] text-center">Why Chose Us</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-5 lg:my-10 py-5 lg:py-10">
            {data.map((d, i) => (
              <div className="bg-lightOrange p-4 rounded-xl" key={i}>
                <img src={d.img} alt="" />
                <h1 className="text-[24px] my-2.5">{d.title}</h1>
                <p className="text-[16px]">{d.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={vector} className="absolute top-0 right-0 hidden lg:block" alt="" />
    </section>
  );
}
