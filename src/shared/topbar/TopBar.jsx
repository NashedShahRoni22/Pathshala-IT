import React, { useEffect, useState } from "react";
import { BsBook } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo/Pathshala IT Logo.png";
import { Link } from "react-router-dom";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  // Function to handle scroll event
  const handleScroll = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    <nav className="sticky top-0 bg-white z-50">
      <section className="mx-5 md:container md:mx-auto">
        <div className="flex justify-between items-center py-2.5 lg:py-5">
          <Link to={'/'} className="logo">
            <img src={logo} alt="" className="h-[60px] w-[180px]" />
          </Link>
          {/* default view nav */}
          <ul className="hidden md:flex gap-6 font-semibold">
            {menuItems.map((mi, i) => (
              <li key={i} className="text-[16px] text-[#222222]">
                <Link to={mi.link}>{mi.name}</Link>
              </li>
            ))}
          </ul>
          <Link
            to={"/register"}
            className="py-2 px-4 bg-orange rounded hidden md:flex items-center gap-2.5"
          >
            Enroll Now <BsBook className="text-xl" />
          </Link>
          {/* navbar jsx */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineClose className="text-2xl text-orange rounded-full" />
            ) : (
              <FaBars className="text-2xl text-blue" />
            )}
          </button>
        </div>

        {/* mobile view nav */}
        {open && (
          <ul className="bg-white/90 min-w-full min-h-full fixed top-20 left-0 flex flex-col md:hidden font-semibold">
            {menuItems.map((mi, i) => (
              <li
                key={i}
                className="text-[18px] text-[#222222] font-semibold border-b-2 border-b-lightOrange text-end py-2.5 px-5 bg-white"
              >
                <Link to={mi.link}>{mi.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </nav>
  );
}
