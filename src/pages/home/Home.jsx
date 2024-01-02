import React from "react";
import HomeLanding from "./HomeLanding";
import HomeCourseBar from "./HomeCourseBar";
import HomeSeminar from "./HomeSeminar";
import HomeAdmission from "./HomeAdmission";
import HomeCourses from "./HomeCourses";
import HomeServices from "./HomeServices";
import HomeChoseUs from "./HomeChoseUs";
import HomeStories from "./HomeStories";
import HomeGallery from "./HomeGallery";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

export default function Home() {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(!open);

  return (
    <section>
      <HomeLanding />
      <HomeCourseBar />
      <HomeAdmission />
      <HomeCourses />
      <HomeServices />
      <HomeSeminar />
      <HomeChoseUs />
      <HomeGallery />
      <HomeStories />

      {/* free class dialogue */}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Join our free class</DialogHeader>
        <DialogBody className="flex flex-col gap-2.5">
          <Input label="Enter email" />
          <Input label="Enter name" />
          <Input label="Enter phone number" />
        </DialogBody>
        <DialogFooter>
          <Button
            size="sm"
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            size="sm"
            className="bg-blue"
          >
            <span>Join</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}
