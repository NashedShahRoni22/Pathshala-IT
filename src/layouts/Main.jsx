import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../shared/topbar/TopBar";
import BottomBar from "../shared/bottombar/BottomBar";
import MiddleBar from "../shared/fixedbar/MiddleBar";
import JoinSeminar from "../shared/fixedbar/JoinSeminar";
import GetDiscount from "../shared/fixedbar/GetDiscount";

export default function Main() {
  return (
    <main>
      <TopBar />
      <Outlet/>
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
