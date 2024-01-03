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
      <div className="scroll-to-top-button hidden">
        <button
          className="z-50 fixed bottom-16 bg-white md:bottom-3 flex justify-center items-center left-5 md:right-1/2 md:left-1/2  h-10 md:h-12 w-10 md:w-12 border-2 rounded-xl"
          onClick={handleScrollToTop}
        >
          <FaArrowUp className="text-xl md:text-3xl text-blue"/>
        </button>
      </div>
    </main>
  );
}
