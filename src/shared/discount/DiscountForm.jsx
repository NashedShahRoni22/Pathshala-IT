import { Button, Option, Select, Spinner } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";
export default function DiscountForm({ open, setOpen }) {
  const [loader, setLoader] = useState(false);
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");

  //get courses
  useEffect(() => {
    let url = "https://api.pathshalait.com/api/v1/course/list";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code === 200) {
          setCourses(data?.data);
        } else {
          console.log(data);
        }
      });
  }, []);

  //request for discount
  const handleGetDiscount = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const location = form.location.value;
    // console.log(courseId, name, number, location);

    if (number.length !== 11) {
      alert("Enter a 11 digit Bangladesh number!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone_number", number);
    formData.append("course_id", courseId);
    formData.append("type", "course");
    formData.append("address", location);
    try {
      setLoader(true);
      // Make a POST request using the fetch method
      const response = await fetch(
        "https://api.pathshalait.com/api/v1/apply/discount",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      // console.log(responseData);
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
    <form onSubmit={handleGetDiscount} className="px-8 py-16">
      <h1 className="text-center text-[20px] text-black">
        To know more about the offers, please fill up the form given below.
        <br />
        Our representative will get back to you soon.
      </h1>

      <div className="mt-10">
        <Select label="Select Course" onChange={(value) => setCourseId(value)}>
          {courses?.map((c, i) => (
            <Option key={i} value={c?.id}>
              {c?.name}
            </Option>
          ))}
        </Select>
        {courseId === "" && (
          <p className="text-red-500 mt-2.5">Please select a course first!</p>
        )}

        <div className="grid md:grid-cols-2 my-4 gap-5">
          <Input label="Enter Name" type="text" name="name" required />
          <Input
            label="Enter Phone Number"
            type="number"
            name="number"
            required
          />
          <Input label="Enter Location" type="text" name="location" required />
        </div>
      </div>
      <p className="text-blue text-center font-semibold">
        If you are a registered user! Please enter your account phone number for
        discount.
      </p>
      <Button
        disabled={courseId === ""}
        type="submit"
        className="bg-blue flex items-center gap-2 mt-[16px]"
        size="sm"
      >
        Submit
        {loader && <Spinner className="h-4 w-4" />}
      </Button>
    </form>
  );
}
