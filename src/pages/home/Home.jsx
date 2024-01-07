import React, { useEffect } from "react";
import HomeLanding from "./HomeLanding";
import HomeCourseBar from "./HomeCourseBar";
import HomeSeminar from "./HomeSeminar";
import HomeAdmission from "./HomeAdmission";
import HomeCourses from "./HomeCourses";
import HomeServices from "./HomeServices";
import HomeChoseUs from "./HomeChoseUs";
import HomeStories from "./HomeStories";
import HomeGallery from "./HomeGallery";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import HomeFacts from "./HomeFacts";
import { IoMdCloseCircle } from "react-icons/io";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  //handle modal time
  useEffect(() => {
    const handleDelayedOpen = () => {
      setTimeout(() => {
        setOpen(true);
      }, 15000);
    };

    // Initiate the delayed opening only once
    handleDelayedOpen();
  }, []);

  const handleOpen = () => setOpen(!open);

  //handle Join Free Class
  const handleJoinFreeClass = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;

    if (number.length !== 11) {
      alert("Enter a 11 digit Bangladesh number!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone_number", number);
    formData.append("email", email);
    try {
      setLoader(true);
      const response = await fetch(
        "https://api.pathshalait.com/api/v1/public/apply/free/class",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      if (responseData.status === true) {
        window.alert(responseData.message);
        setOpen(!open);
      } else {
        window.alert(responseData.message);
        console.log(
          "Error making POST request. Status code: " + response.status
        );
      }
    } catch (error) {
      console.log("Error making POST request: " + error);
    } finally {
      setLoader(false);
    }
  };

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
      <HomeFacts />
      <HomeStories />

      {/* free class dialogue */}
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="freeClass min-h-[80vh] flex items-end justify-center">
          <form
            onSubmit={handleJoinFreeClass}
            className="flex flex-col w-full lg:w-3/4 p-5 gap-2.5"
          >
            <input
              className="px-4 py-2 focus:outline-blue rounded-xl"
              required
              name="name"
              type="text"
              placeholder="Enter name"
            />
            <input
              className="px-4 py-2 focus:outline-blue rounded-xl"
              required
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <input
              className="px-4 py-2 focus:outline-blue rounded-xl"
              required
              name="number"
              type="number"
              placeholder="Enter phone number"
            />
            <div>
              <button onClick={handleOpen} className="absolute top-0 right-0">
                <IoMdCloseCircle className="text-red-500 text-3xl" />
              </button>
              <Button type="submit" size="sm" className="bg-blue px-4 py-2 w-full">
                <span></span>
                {loader ? "Joining ..." : "Join Now"}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </section>
  );
}
