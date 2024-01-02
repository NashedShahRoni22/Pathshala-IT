import React, { useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function TopSocialBar() {
  const [lang, setLang] = useState("EN");
  return (
    <section className="bg-blue py-2.5">
      <div className="mx-5 md:container md:mx-auto flex justify-between">
        <div className="flex gap-2.5">
          <p className="flex gap-1.5 items-center text-lightBlue">
            <BsTelephoneFill className="text-xl" />
            01716561273
          </p>
          <p className="flex gap-1.5 items-center text-lightBlue">
            <MdEmail className="text-xl" />
            pathshalait365@gmail.com
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <a
            target="_blank"
            href="https://www.facebook.com/pathshalaitofficial/"
            className="flex gap-2.5"
          >
            <BsFacebook className="text-xl text-lightBlue" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/pathshalait365/"
            className="flex gap-2.5"
          >
            <BsInstagram className="text-xl text-lightBlue" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pathshalait/"
            className="flex gap-2.5"
          >
            <BsLinkedin className="text-xl text-lightBlue" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCA8XRKz0lIa_ldj6GiE_cJw"
            className="flex gap-2.5"
          >
            <BsYoutube className="text-xl text-lightBlue" />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@pathshala.it"
            className="flex gap-2.5"
          >
            <BsTiktok className="text-xl text-lightBlue" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/PathshalaIt"
            className="flex gap-2.5"
          >
            <BsTwitter className="text-xl text-lightBlue" />
          </a>

          <div className="border-2 border-lightBlue rounded-full">
            <button
              onClick={() => setLang("BN")}
              className={`px-2 py-1 text-lightBlue rounded-full border-0 ${
                lang === "BN" && "bg-orange"
              }`}
            >
              BN
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`px-2 py-1 text-lightBlue rounded-full border-0 ${
                lang === "EN" && "bg-orange"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
