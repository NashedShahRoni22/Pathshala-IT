import React from "react";
import { BsBook } from "react-icons/bs";
import logo from "../../assets/logo/Pathshala IT Black.png";
import line from "../../assets/footer/Line.png";
import bkash from "../../assets/footer/bKash logo.png";
import nagad from "../../assets/footer/g1438.png";
import rocket from "../../assets/footer/Rocket Logo.png";
import ssl from "../../assets/footer/SSLcommerz Logo.png";

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

export default function BottomBar() {
  const data = [
    {
      img: bkash,
      number: "+8801318214398",
    },
    {
      img: nagad,
      number: "+8801318214398",
    },
    {
      img: rocket,
      number: "+8801318214398",
    },
    {
      img: ssl,
      number: "+8801318214398",
    },
  ];
  return (
    <footer className="bg-lightBlue">
      <section className="mx-5 md:container md:mx-auto py-20">
        <div className="flex flex-col justify-center items-center p-16 gap-5 bg-white rounded-xl">
          <h1 className="text-[60px] text-center">
            Ready to Begin <br /> Your Journey With Us?
          </h1>
          <button className="py-2 px-4 bg-orange rounded flex items-center gap-2.5">
            Enroll Now <BsBook className="text-xl" />
          </button>
        </div>
        <div className="grid gap-5 md:grid-cols-4 text-[16px] mt-20">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul>
            <h1>Explore</h1>
            <li>About Us</li>
            <li>Courses</li>
            <li>Services</li>
          </ul>
          <ul>
            <h1>Visit</h1>
            <li>Seminars</li>
            <li>Success Stories</li>
            <li>Contact Us</li>
          </ul>
          <div>
            <h1>Contact Us</h1>
            <p>+880 1234 567890</p>
            <p>info@pathshalait.com</p>
            <p>
              Building Name, Area, Road, <br />
              Gazipur, Bangladesh
            </p>
          </div>
        </div>
        <img src={line} className="my-10 w-full" alt="" />
        <div>
          <h1 className="text-[16px] text-center">Our Payment Merchant</h1>
          <div className="grid gap-5 grid-cols-4 mt-5">
            {data.map((d, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl flex flex-col items-center justify-center gap-2"
              >
                <img src={d.img} alt="" />
                <p>{d.number}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={line} className="my-10 w-full" alt="" />
        <div className="grid grid-cols-3">
          <div className="flex gap-4">
            <BsYoutube className="text-xl text-[#FF0000]" />
            <BsFacebook className="text-xl text-[#3b5998]" />
            <BsInstagram className="text-xl text-orange" />
            <BsLinkedin className="text-xl text-[#0072b1]" />
          </div>
          <p>© Copyright reserved by Pathshala IT 2023</p>
          <div>
            <form className="flex">
              <input className="px-4 py-2 rounded-l-xl focus:outline-none" placeholder="Subscribe our newsletter" type="email" />
              <button className="px-4 py-2 bg-orange rounded-r-xl">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
}
