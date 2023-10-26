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
      link: "/about",
    },
    {
      name: "Success Stories",
      link: "/",
    },
    {
      name: "Courses",
      link: "/",
      child: [
        {
          name: "Free Courses",
          link: "/",
        },
        {
          name: "Paid Courses",
          link: "/",
        },
      ],
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
          <Link to={"/"} className="logo">
            <img src={logo} alt="" className="h-[60px] w-[180px]" />
          </Link>
          {/* default view nav */}
          <ul className="hidden lg:flex gap-6 font-semibold">
            {menuItems.map((mi, i) => (
              <div>
                <Link to={mi.link}>
                  <li className="text-[16px] text-[#222222]">
                    {mi.name}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
          <div className="flex items-center gap-2.5">
            <Link
              to={"/register"}
              className="py-2 px-4 bg-orange rounded hidden md:flex items-center gap-2.5"
            >
              Enroll Now <BsBook className="text-xl" />
            </Link>
            {/* navbar jsx */}
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <AiOutlineClose className="text-2xl text-orange rounded-full" />
              ) : (
                <FaBars className="text-2xl text-blue" />
              )}
            </button>
          </div>
        </div>

        {/* mobile view nav */}
        {open && (
          <ul className="bg-white/90 min-w-full min-h-full fixed top-20 left-0 flex flex-col lg:hidden font-semibold">
            {menuItems.map((mi, i) => (
              <Link key={i} to={mi.link}>
                <li className="text-[18px] md:text-[24px] text-[#222222] font-semibold border-b-2 border-b-lightOrange hover:bg-lightOrange duration-300 ease-linear text-end md:text-center py-2.5 px-5 bg-white">
                  {mi.name}
                </li>
              </Link>
            ))}
            <li className="flex justify-end mr-5 mt-2.5">
              <Link
                to={"/register"}
                className="py-2 px-4 w-fit bg-orange rounded md:hidden flex items-center gap-2.5"
              >
                Enroll Now <BsBook className="text-xl" />
              </Link>
            </li>
          </ul>
        )}
      </section>
    </nav>
  );
}
