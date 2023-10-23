import React from 'react'
import { SiGoogleclassroom } from "react-icons/si";
import { GiVideoConference } from "react-icons/gi";
import { CgMathPercent } from "react-icons/cg";

export default function MiddleBar() {
  return (
    <div className='flex justify-center bg-white/90 rounded-full'>
        <button className='px-4 py-2 hover:bg-blue rounded-l-full flex items-center gap-1'><GiVideoConference/> Seminar</button>
        <button className='px-4 py-2 hover:bg-blue flex items-center gap-1'> <SiGoogleclassroom/> Courses</button>
        <button className='px-4 py-2 hover:bg-blue rounded-r-full flex items-center gap-1'><CgMathPercent/> Discount</button>
    </div>
  )
}
