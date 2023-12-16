import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import logo from "../../assets/logo/pathshala-IT.png";
import { Link } from "react-router-dom";
import userImg from "../../assets/about/user.png"
import UserBar from "./UserBar";
import { MdLogout } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

export default function TopBar() {
  const accessToken = localStorage.getItem("access_token");
  const {user} = useContext(AuthContext);
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
      child: [
        {
          name: "Free Courses",
          link: "/",
        },
        {
          name: "Paid Courses",
          link: "/courses",
        },
      ],
    },
    {
      name: "Contact Us",
      link: "/contact_us",
    },
  ];
  //log out user
  const handleLogOut = async () => {
    try {
      const response = await fetch(
        `https://api.pathshalait.com/api/v1/client/admin/logout`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.status === true) {
        localStorage.clear();
        window.location.reload();
        toast.error(responseData?.message)
      } else {
        console.log("Error making GET request. Status code: " + responseData);
      }
    } catch (error) {
      console.log("Error making GET request: " + error);
    } finally {
    }
  };
  return (
    <nav className="sticky top-0 bg-lightBlue z-50">
      <section className="mx-5 md:container md:mx-auto">
        <div className="flex justify-between items-center py-2.5 lg:py-5">
          <Link to={"/"} className="logo">
            <img src={logo} alt="" className="h-[60px] w-[180px]" />
          </Link>
          {/* default view nav */}
          <ul className="hidden lg:flex gap-6 font-semibold">
            {menuItems.map((mi, i) => (
              <div key={i} className="relative group">
                <Link to={mi.link} className="relative">
                  <li className="text-[18px] text-[#222222] border-b-2 border-transparent hover:border-blue">
                    {mi.name}
                  </li>
                  {mi.child && (
                    <div className="h-2.5 w-2.5 bg-blue rounded-full absolute -top-1 -right-1"></div>
                  )}
                </Link>
                {mi.child && (
                  <ul className="absolute hidden group-hover:block top-6 left-4 min-w-max bg-white rounded shadow">
                    {mi.child.map((mc, i) => (
                      <Link key={i} to={mc.link}>
                        <li className="p-2 text-[18px] text-[#222222] border-b-2 border-b-lightBlue hover:border-b-blue duration-300 ease-linear">
                          {mc.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
          <div className="flex items-center gap-2.5">
            {accessToken !== null ? (
              <div className="relative group">
                {
                  user?.profile_image === null ?
                  <img src={userImg} alt="" className="h-[40px] w-[40px] rounded-full cursor-pointer" /> 
                  :
                  <img src={user?.profile_image} alt="" className="h-[40px] w-[40px] rounded-full cursor-pointer" />
                }
                
                <div className="hidden group-hover:block absolute top-10 -right-[14px] md:-right-[32px] lg:right-0 min-w-[280px]">
                    <UserBar handleLogOut={handleLogOut} />
                </div>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="py-2 px-4 bg-blue text-white rounded hidden md:flex items-center gap-2.5"
              >
                Login <AiOutlineLogin className="text-xl" />
              </Link>
            )}

            {/* navbar jsx */}
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <AiOutlineClose className="text-2xl text-blue rounded-full" />
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
              <div key={i} className="group">
                <Link
                  to={mi.link}
                  onClick={() => setOpen(!open)}
                  className="relative"
                >
                  <li className="text-[18px] md:text-[24px] text-[#222222] font-semibold border-b-2 border-b-lightBlue hover:bg-lightBlue duration-300 ease-linear text-end py-2.5 px-5 md:px-10 bg-white">
                    {mi.name}
                  </li>
                  {mi.child && (
                    <div className="h-2.5 w-2.5 bg-blue rounded-full absolute top-2 right-2"></div>
                  )}
                </Link>

                {mi.child && (
                  <ul className="hidden group-hover:block mr-5">
                    {mi.child.map((mc, i) => (
                      <Link key={i} to={mc.link} onClick={() => setOpen(!open)}>
                        <li className="text-[16px] md:text-[22px] text-[#222222] font-semibold border-b-2 border-b-lightBlue hover:bg-lightBlue duration-300 ease-linear text-end py-2.5 px-5 md:px-10 bg-white">
                          {mc.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="flex justify-end mr-5 mt-2.5">
              {accessToken !== null ? (
                <Button onClick={handleLogOut} className="flex items-center gap-2 text-white bg-blue" size="sm">Log Out <MdLogout className="text-xl" /></Button>
              ) : (
                <Link
                  to={"/login"}
                  className="py-2 px-4 w-fit bg-blue text-white rounded md:hidden flex items-center gap-2.5"
                >
                  Login <AiOutlineLogin className="text-xl" />
                </Link>
              )}
            </div>
          </ul>
        )}
      </section>
    </nav>
  );
}
