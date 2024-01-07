import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../shared/topbar/TopBar";
import BottomBar from "../shared/bottombar/BottomBar";
import MiddleBar from "../shared/fixedbar/MiddleBar";
import JoinSeminar from "../shared/fixedbar/JoinSeminar";
import GetDiscount from "../shared/fixedbar/GetDiscount";
import TopSocialBar from "../shared/topbar/TopSocialBar";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { FaArrowUp } from "react-icons/fa";
import whatsLogo from "../assets/whatsapp.png";

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.querySelector(".scroll-to-top-button");
      const scrollPosition = window.scrollY;

      if (scrollPosition >= window.innerHeight) {
        scrollButton.classList.remove("hidden");
      } else {
        scrollButton.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <div className="hidden lg:block">
        <TopSocialBar />
      </div>
      <TopBar />
      <Outlet />
      <BottomBar />
      <div className="md:hidden fixed flex justify-center w-full bottom-2 z-20">
        <MiddleBar />
      </div>
      <div className="hidden md:block fixed z-20 top-1/2 -left-10 -rotate-90">
        <JoinSeminar />
      </div>
      <div className="hidden md:block fixed z-20 top-1/2 -right-10 rotate-90">
        <GetDiscount />
      </div>
      <div>
        <MessengerCustomerChat
          pageId="<PAGE_ID>"
          appId="<APP_ID>"
          htmlRef="<REF_STRING>"
        />
      </div>
      {/* Scroll to top  */}
      <div className="scroll-to-top-button">
        <button
          className="z-50 fixed bg-white bottom-3  hidden md:flex justify-center items-center md:right-1/2 md:left-1/2 md:h-12 md:w-12 border-2 rounded-xl"
          onClick={handleScrollToTop}
        >
          <FaArrowUp className="text-xl md:text-3xl text-blue" />
        </button>
      </div>

      {/* whatsapp button */}
      <a
        href="https://wa.me/01716561273?text=Hi! I need help!"
        className="hidden md:block fixed left-2.5 bottom-3 z-50"
        target="_blank"
      >
        <img alt="Whatsapp_logo" className="h-[50px]" src={whatsLogo} />
      </a>
    </main>
  );
}
