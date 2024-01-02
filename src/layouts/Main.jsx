import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../shared/topbar/TopBar";
import BottomBar from "../shared/bottombar/BottomBar";
import MiddleBar from "../shared/fixedbar/MiddleBar";
import JoinSeminar from "../shared/fixedbar/JoinSeminar";
import GetDiscount from "../shared/fixedbar/GetDiscount";
import TopSocialBar from "../shared/topbar/TopSocialBar";

export default function Main() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <main>
      <div className="hidden lg:block">
      <TopSocialBar/>
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
    </main>
  );
}
