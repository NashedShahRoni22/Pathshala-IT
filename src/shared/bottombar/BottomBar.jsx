import React from "react";
import { BsBook, BsTiktok, BsTwitter } from "react-icons/bs";
import logo from "../../assets/logo/Pathshala IT White.png";
import line from "../../assets/footer/Line.png";
import bkash from "../../assets/footer/bKash logo.png";
import nagad from "../../assets/footer/g1438.png";
import rocket from "../../assets/footer/Rocket Logo.png";
import ssl from "../../assets/footer/SSLcommerz Logo.png";

import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BottomBar() {
  const data = [
    {
      img: bkash,
      number: "01303110347",
    },
    {
      img: nagad,
      number: "01303110347",
    },
    {
      img: rocket,
      number: "01303110347",
    },
    {
      img: ssl,
      number: "01303110347",
    },
  ];
  return (
    <footer className="bg-blue text-white">
      <section className="mx-5 md:container md:mx-auto py-10 lg:py-20">
        <div className="text-black flex flex-col justify-center items-center p-8 lg:p-16 gap-5 bg-white rounded-xl">
          <h1 className="text-[40px] lg:text-[60px] text-center">
            Ready to Begin <br /> Your Journey With Us?
          </h1>
          <button className="py-2 px-4 bg-blue text-white rounded flex items-center gap-2.5">
            Enroll Now <BsBook className="text-xl" />
          </button>
        </div>

        <div className="text-[16px] mt-20 flex flex-col gap-5 md:flex-row">
          <div className="md:w-1/2">
            <img src={logo} alt="" />
          </div>
          <div className="md:w-1/2 grid grid-cols-2">
            <ul>
              <h1>Explore</h1>
              <li className="mt-2.5">About Us</li>
              <li>Courses</li>
              <li>Services</li>
            </ul>
            <ul>
              <h1>Links</h1>
              <li className="mt-2.5">Seminars</li>
              <li>Success Stories</li>
              <li>
                {" "}
                <Link to="/features">Features</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/contact_us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <img src={line} className="my-10 w-full" alt="" />

        <div className="flex flex-col gap-5 md:flex-row">
          <div className="md:w-1/2">
            <h1>Contact Us</h1>
            <p className="mt-2.5">01716561273</p>
            <p>pathshalait365@gmail.com</p>
            <form className="flex mt-5">
              <input
                className="px-4 py-2 rounded-l-xl focus:outline-none"
                placeholder="Subscribe our newsletter"
                type="email"
              />
              <button className="px-4 py-2 bg-orange rounded-r-xl">
                Submit
              </button>
            </form>
          </div>
          <div className="md:w-1/2 grid grid-cols-2">
            <div>
              <h1>Visit Us</h1>
              <p>9 AM to 7 PM</p>
              <p>1/G DIT Rd, Dhaka 1219, Bangladesh</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h1>Social Links</h1>
              <a
                target="_blank"
                href="https://www.facebook.com/pathshalaitofficial/"
                className="flex gap-2.5"
              >
                <BsFacebook className="text-xl" /> Facebook
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/pathshalait365/"
                className="flex gap-2.5"
              >
                <BsInstagram className="text-xl" /> Instagram
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pathshalait/"
                className="flex gap-2.5"
              >
                <BsLinkedin className="text-xl" /> Linkedin
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCA8XRKz0lIa_ldj6GiE_cJw"
                className="flex gap-2.5"
              >
                <BsYoutube className="text-xl" />
                Youtube
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@pathshala.it"
                className="flex gap-2.5"
              >
                <BsTiktok className="text-xl" />
                Tiktok
              </a>
              <a
                target="_blank"
                href="https://twitter.com/PathshalaIt"
                className="flex gap-2.5"
              >
                <BsTwitter className="text-xl" />
                Twitter
              </a>
            </div>
          </div>
        </div>

        <img src={line} className="my-10 w-full" alt="" />

        <div>
          <h1 className="text-[16px] text-center">Our Payment Merchant</h1>
          <div className="grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
            {data.map((d, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl flex flex-col items-center justify-center gap-2"
              >
                <img src={d.img} alt="" />
                <p className="text-black mt-2.5">{d.number}</p>
              </div>
            ))}
          </div>
        </div>

        <img src={line} className="my-10 w-full" alt="" />

        <div>
          <p className="text-center pb-[20px] md:pb-0">
            © Copyright reserved by Pathshala IT 2023
          </p>
        </div>
      </section>
    </footer>
  );
}
