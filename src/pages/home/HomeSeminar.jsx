import React, { useEffect, useState } from "react";
import img from "../../assets/seminar/Rectangle 77.png";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Spinner,
} from "@material-tailwind/react";

export default function HomeSeminar() {
  const [open, setOpen] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [seminarDetails, setSeminarDetails] = useState({});

  const handleOpen = (data) => {
    setOpen(!open)
    setSeminarDetails(data)
  };

  const [seminars, setSeminars] = useState([]);

  //get seminar
  useEffect(() => {
    fetch("https://api.pathshalait.com/api/v1/public/seminars")
      .then((res) => res.json())
      .then((data) => setSeminars(data?.data));
  }, []);

  // join seminar
  const handleJoinSeminar = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    console.log(name, email, phone, location);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone_number", phone);
    formData.append("email", email);
    formData.append("address", location);
    formData.append("seminar_id", seminarDetails.id);
    try {
      setLoader(true);
      // Make a POST request using the fetch method
      const response = await fetch(
        "https://api.pathshalait.com/api/v1/public/seminar/registration",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log(responseData);
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
    <div className="mx-5 md:container md:mx-auto my-5 lg:my-10">
      <h1 className="text-[40px] lg:text-[60px] text-center">
        Join free Seminars
      </h1>
      <div className="py-10 flex flex-col gap-8 lg:gap-16 items-center lg:flex-row">
        <div className="lg:w-1/2">
          {seminars.map((d, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 md:grid-cols-4 my-2.5 py-2.5 place-items-center border-b-2 hover:border-blue hover:shadow-xl duration-300 ease-linear`}
            >
              <div>
                <h1 className="text-[24px] lg:text-[32px]">
                  {d.start_date.slice(0, 2)}
                </h1>
                <p className="text-[16px] lg:text-[20px]">
                  {d.start_date.slice(2, 12)}
                </p>
              </div>

              <p className="hidden md:block text-[24px]">{d.subject}</p>

              <div>
                <p className="md:hidden text-[20px]">{d.subject}</p>
                <p className="text-[16px] lg:text-[20px]">Online</p>
                <p className="text-[16px] lg:text-[20px]">
                  {d.seminar_start_time}
                </p>
              </div>
              <div>
                <button
                  onClick={()=>handleOpen(d)}
                  className="py-2 px-4 text-white bg-blue rounded flex items-center gap-2.5"
                >
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleJoinSeminar}>
          <DialogHeader>Join seminar for {seminarDetails.subject}</DialogHeader>
          <DialogBody className="flex flex-col gap-5 py-5">
            <Input
              className="focus:outline-blue"
              required
              name="name"
              label="Enter Name"
            />
            <Input
              className="focus:outline-blue"
              required
              name="email"
              label="Enter Email"
            />
            <Input
              className="focus:outline-blue"
              required
              name="phone"
              label="Enter Phone"
            />
            <Input
              className="focus:outline-blue"
              required
              name="location"
              label="Enter Location"
            />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
              size="sm"
            >
              <span>Cancel</span>
            </Button>
            <Button type="submit" className="bg-blue flex gap-2 items-center" size="sm">
              <span>Join Now</span>
              {
                loader && <Spinner className="h-4 w-4" />
              }
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}
