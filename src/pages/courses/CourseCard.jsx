import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import DiscountForm from "../../shared/discount/DiscountForm";
import { AiFillCloseCircle } from "react-icons/ai";

export default function CourseCard({ c }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <section className="bg-white shadow-xl rounded-xl">
      <Link to={`/course_details/${c?.course_slug}`}>
        <img
          src={c?.course_image}
          alt=""
          className="min-w-full h-[180px] md:h-[240px] rounded-t-xl"
        />
        <div className="p-4 flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <p className="text-[16px]">{c?.category_name}</p>
            <p className="px-2 py-1 bg-blue text-white rounded-xl">
              {c?.course_type === 1 ? "Online" : "Offline"}
            </p>
          </div>
          <p className="text-[20px] md:text-[24px]">{c?.name}</p>
          <hr />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <BsStarFill className="md:text-xl text-orange" />
              <BsStarFill className="md:text-xl text-orange" />
              <BsStarFill className="md:text-xl text-orange" />
              <BsStarFill className="md:text-xl text-orange" />
              <BsStarHalf className="md:text-xl text-orange" />
            </div>
            <p className="text-[16px] flex gap-1 items-center">
              {" "}
              <PiStudentFill className="text-xl md:text-2xl text-blue" /> 500+
            </p>
          </div>
          <hr />
        </div>
      </Link>
      <div className="flex justify-between items-center p-4">
        <p className="text-[16px] text-blue">&#2547; {c?.amount}</p>
        <button
          onClick={handleOpen}
          className="flex gap-0.5 text-[16px] px-4 py-2 rounded-xl text-black border border-blue hover:bg-blue hover:text-white duration-300 ease-linear"
        >
          <span className="hidden md:block">Click For</span>
          Discount
        </button>
      </div>
      <Dialog open={open} handler={handleOpen} className="relative">
        <DialogBody>
          <DiscountForm open={open} setOpen={setOpen} />
          <AiFillCloseCircle
            onClick={handleOpen}
            className="text-3xl absolute right-0 top-0 text-red-500 cursor-pointer"
          />
        </DialogBody>
      </Dialog>
    </section>
  );
}
