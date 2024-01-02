import React from "react";
import social from "../../assets/servicesIcons/social.png";
import market from "../../assets/servicesIcons/markettiing_tools.png";
import web from "../../assets/servicesIcons/web.png";

export default function HomeServices() {
  const data = [
    {
      img: social,
      title: "Social Media Marketing",
      content:
        "Lorem ipsum dolor sit amet consectetur. Consectetur cum auctor ultricies placerat arcu.",
    },
    {
      img: web,
      title: "Website design & Development",
      content:
        "Lorem ipsum dolor sit amet consectetur. Consectetur cum auctor ultricies placerat arcu.",
    },
    {
      img: market,
      title: "Marketing Tools Management",
      content:
        "Lorem ipsum dolor sit amet consectetur. Consectetur cum auctor ultricies placerat arcu.",
    },
  ];
  return (
    <section className="bg-lightBlue lg:min-h-[80vh] flex items-center">
      <div className="mx-5 md:container md:mx-auto my-10 lg:my-20">
        <h1 className="text-[40px] lg:text-[60px] text-center">Popular Services</h1>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 my-5 lg:my-10 py-5 lg:py-10">
          {data.map((d, i) => (
            <div className="bg-white p-4 rounded-xl" key={i}>
              <img src={d.img} alt="" />
              <h1 className="text-[24px] my-2.5">{d.title}</h1>
              <p className="text-[16px]">{d.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
