import { Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export default function PaymentPage() {
//   const [loader, setLoader] = useState(false);
//   const [courses, setCourses] = useState([]);
//   console.log(courses);

  //get courses
//   useEffect(() => {
//     let url = "https://api.pathshalait.com/api/v1/course/list";
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status_code === 200) {
//           setCourses(data?.data);
//         } else {
//           console.log(data);
//         }
//       });
//   }, []);
  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20">
      {/* <h5 className="font-semibold text-[24px] capitalize">package details</h5> */}
      {/* <div className="grid md:grid-cols-2 gap-4 mt-5">
        <Select label="Select Course" color="blue">
          {courses?.map((c) => (
            <Option value={c?.id}>{c?.name}</Option>
          ))}
        </Select>
      </div> */}
      <h5 className="font-semibold text-[24px] capitalize mt-5">
        payment information
      </h5>
      <div className="grid md:grid-cols-2 gap-4 mt-5">
        <Select label="Select Payment Method" color="blue">
          <Option>Bkash</Option>
          <Option>Nagad</Option>
          <Option>Rocket </Option>
        </Select>
        <Input label="Enter Amount" />
        <Input label="Enter Transection Number" />
        <Input label="Enter Transection ID" />
      </div>
    </section>
  );
}
