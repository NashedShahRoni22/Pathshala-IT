import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import DiscountForm from "../discount/DiscountForm";
import { AiFillCloseCircle } from "react-icons/ai";

export default function GetDiscount() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <button
        onClick={handleOpen}
        className="px-2 md:px-4 py-1 md:py-2 bg-blue border-2 text-white rounded rounded-bl-xl rounded-br-xl"
      >
        Get Discount
      </button>
      <Dialog open={open} handler={handleOpen} className="relative">
        <DialogBody>
          <DiscountForm open={open} setOpen={setOpen} />
          <AiFillCloseCircle onClick={handleOpen} className="text-3xl absolute right-0 top-0 text-red-500 cursor-pointer" />
        </DialogBody>
      </Dialog>
    </>
  );
}
