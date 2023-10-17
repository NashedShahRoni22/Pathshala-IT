import React from "react";
import { BsBook } from "react-icons/bs"
import logo from "../../assets/logo/Pathshala IT Logo.png"

export default function TopBar() {
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Success Stories",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  return (
    <nav className="mx-5 md:container md:mx-auto">
      <section className="flex justify-between items-center py-5">
        <div className="logo">
          <img src={logo} alt="" className="h-[60px] w-[180px]" />
        </div>
        <ul className="flex gap-6 font-semibold">
          {menuItems.map((mi, i) => (
            <li key={i} className="text-[16px] text-[#222222]">
              {mi.name}
            </li>
          ))}
        </ul>
        <button className="py-2 px-4 bg-blue rounded flex items-center gap-2.5">
          Enroll Now <BsBook className="text-xl"/>
        </button>
      </section>
    </nav>
  );
}
