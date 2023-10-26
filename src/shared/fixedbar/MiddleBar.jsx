import React from 'react'
import { SiGoogleclassroom } from "react-icons/si";
import { GiVideoConference } from "react-icons/gi";
import { CgMathPercent } from "react-icons/cg";

export default function MiddleBar() {
  return (
    <div className='flex justify-center bg-white/90 rounded-[16px]'>
        <button className='px-3 py-3 hover:bg-blue rounded-l-full flex items-center gap-1'><GiVideoConference className='text-xl'/> Seminar</button>
        <button className='px-3 py-3 hover:bg-blue flex items-center gap-1'> <SiGoogleclassroom className='text-xl'/> Courses</button>
        <button className='px-3 py-3 hover:bg-blue rounded-r-full flex items-center gap-1'><CgMathPercent className='text-xl'/> Discount</button>
    </div>
  )
}
