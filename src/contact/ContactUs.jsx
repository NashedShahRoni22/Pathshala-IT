import { Button, Input, Textarea } from "@material-tailwind/react";
import React from "react";

export default function ContactUs() {
  return (
    <section>
      <div className="bg-lightBlue py-20 md:py-40">
        <div className="mx-5 md:container md:mx-auto">
          <h1 className="text-[40px] md:text-[60px]">Contact Us</h1>
          <p className="text-[16px] md:text-[20px] md:w-2/3">
            You are welcomed to visit our office for any information related to
            course and training. You can also reach us through the hotline
            number or messenger.
          </p>
        </div>
      </div>
      <div className="mx-5 md:container md:mx-auto grid md:grid-cols-3 gap-[15px] md:gap-[30px] my-[40px] md:my-[80px]">
        <div>
          <h1 className="text-[24px] md:text-[32px]">Email & Website</h1>
          <p className="text-[18px] md:text-[24px]">
            info@pathshalait.com www.pathshalait.com
          </p>
        </div>
        <div>
          <h1 className="text-[24px] md:text-[32px]">Phone Number</h1>
          <p className="text-[18px] md:text-[24px]">+880 1234 567890</p>
        </div>
        <div>
          <h1 className="text-[24px] md:text-[32px]">Address</h1>
          <p className="text-[18px] md:text-[24px]">
            Building Name, Area, Road, Gazipur, Bangladesh
          </p>
        </div>
      </div>
      <div className="mx-5 md:container md:mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.701239300101!2d90.41729409999999!3d23.758030999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9580326bc05%3A0xe7cbdd0b1db100fd!2sPathshala%20IT!5e0!3m2!1sen!2sbd!4v1700859193892!5m2!1sen!2sbd"
          width="100%"
          className="h-[400px] lg:h-[600px]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-[60px] md:mt-[120px] mx-5 md:container md:mx-auto md:flex ">
        <div className="md:w-1/2">
          <h1 className="text-[24px] md:text-[32px]">Contact Form</h1>
          <p className="text-[18px] md:text-[24px]">
            Share a few quick details about yourself so we can get in touch!
          </p>
        </div>
        <form className="md:w-1/2 mt-[40px] md:mt-[0px] flex-1 flex flex-col gap-[24px] mb-[60px] md:mb-[120px]">
          <Input type="text" required variant="standard" label="First Name" className="" color="blue" />
          <Input type="text" required variant="standard" label="Last Name" className="" color="blue" />
          <Input
            type="email"
            required
            variant="standard"
            label="Email Address" className="" color="blue"
          />
          <Input
            type="number"
            required
            variant="standard"
            label="Phone Number" className="" color="blue"
          />
          <Textarea label="Enter Message" type="text" required variant="standard" className="" color="blue" />
          <Button type="submit" className="bg-blue w-fit">Message</Button>
        </form>
      </div>
    </section>
  );
}
