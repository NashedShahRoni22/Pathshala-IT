import { Button, Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export default function PaymentPage() {
  //   const [loader, setLoader] = useState(false);
  //   const [courses, setCourses] = useState([]);
  //   console.log(courses);

  const courseDetails = JSON.parse(localStorage.getItem("courseDetails"));
  const itemType = localStorage.getItem("item_type");

  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setamount] = useState("");
  const [transectionid, settransectionid] = useState("");
  const [transectionnumber, settransectionnumber] = useState("");

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

  //handle make payment
  const handleMakePayment = async () => {
    console.log(paymentMethod, amount, transectionid, transectionnumber);
    const formData = new FormData();
    formData.append("item_id", courseDetails.id);
    formData.append("transaction_id", transectionid);
    formData.append("transaction_number", transectionnumber);
    formData.append("amount", amount);
    formData.append("payment_method", paymentMethod);
    formData.append("item_type", itemType);
    try {
      // setPostLoading(true);
      // Create headers with the Authorization token
      const headers = new Headers({
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      });
      // Make a POST request using the fetch method
      const response = await fetch(
        "https://api.pathshalait.com/api/v1/client/admin/purchase",
        {
          method: "POST",
          headers,
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      // if (responseData.status === true) {
      //   window.alert("Course added successfully!");
      //   window.location.reload();
      // } else {
      //   console.log(
      //     "Error making POST request. Status code: " + response.status
      //   );
      // }
    } catch (error) {
      console.log("Error making POST request: " + error);
    } finally {
      // setPostLoading(false);
    }
  };

  return (
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="mt-5 shadow rounded-xl p-5">
        <p className="capitalize text-[20px] mt-2.5">
          {" "}
          <span className="font-semibold">course name:</span>{" "}
          {courseDetails.name}
        </p>
        <p className="capitalize text-[20px] my-2.5">
          {" "}
          <span className="font-semibold">course price:</span>{" "}
          {courseDetails.online_amount} BDT
        </p>
        <div className="grid grid-cols-3 gap-x-[15px] md:gap-x-[30px]">
          <div className="bg-lightBlue py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
            <h1 className="text-[24px] md:text-[32px] flex">
              {courseDetails?.duration}
            </h1>
            <p className="text-[20px]">Month</p>
          </div>
          <div className="bg-lightBlue py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
            <h1 className="text-[24px] md:text-[32px]">
              {courseDetails?.total_lecture}
            </h1>
            <p className="text-[20px]">Lectures</p>
          </div>
          <div className="bg-lightBlue py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
            <h1 className="text-[24px] md:text-[32px]">
              {courseDetails?.total_project}
            </h1>
            <p className="text-[20px]">Projects</p>
          </div>
        </div>
      </div>
      {/* <div className="grid md:grid-cols-2 gap-4 mt-5">
        <Select label="Select Course" color="blue">
          {courses?.map((c) => (
            <Option value={c?.id}>{c?.name}</Option>
          ))}
        </Select>
      </div> */}
      <div className="mt-5 shadow rounded-xl p-5">
        <h5 className="font-semibold text-[24px] capitalize">
          payment information
        </h5>
        <div className="grid md:grid-cols-2 gap-4 mt-5">
          <Select label="Select Payment Method" color="blue" onChange={value => setPaymentMethod(value)}>
            <Option value="Bkash">Bkash</Option>
            <Option value="Nagad">Nagad</Option>
            <Option value="Rocket">Rocket</Option>
          </Select>
          <Input type="number" onChange={ e => setamount(e.target.value)} label="Enter Amount" />
          <Input type="text" onChange={ e => settransectionid(e.target.value)} label="Enter Transection Number" />
          <Input type="text" onChange={ e => settransectionnumber(e.target.value)} label="Enter Transection ID" />
        </div>
        <Button onClick={handleMakePayment} className="mt-4 bg-blue">Pay Now</Button>
      </div>
    </section>
  );
}
