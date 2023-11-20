import {
  Button,
  Input,
  Option,
  Select,
  Spinner,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PaymentPage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  //   const [courses, setCourses] = useState([]);
  //   console.log(courses);

  const courseDetails = JSON.parse(localStorage.getItem("courseDetails"));
  const itemType = localStorage.getItem("item_type");

  const [paymentMethod, setPaymentMethod] = useState("");
  const [transectionid, settransectionid] = useState("");
  const [transectionnumber, settransectionnumber] = useState("");


  //handle make payment
  const handleMakePayment = async () => {
    console.log(paymentMethod,courseDetails.amount,  transectionid, transectionnumber);
    const formData = new FormData();
    formData.append("item_id", courseDetails.id);
    formData.append("amount", courseDetails.amount);
    formData.append("transaction_id", transectionid);
    formData.append("transaction_number", transectionnumber);
    formData.append("payment_method", paymentMethod);
    formData.append("item_type", itemType);
    try {
      setLoader(true);
      // Create headers with the Authorization token
      const headers = new Headers({
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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
      if (responseData.status === true) {
        toast.success("Payment done successfully!");
        localStorage.removeItem("item_type");
        localStorage.removeItem("courseDetails");
        navigate("/");
      } else {
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
    <section className="mx-5 md:container lg:w-1/3 md:mx-auto my-10 lg:my-20">
      <div className="mt-5 shadow rounded-xl p-5">
        <p className="capitalize text-[20px] mt-2.5">
          {" "}
          <span className="font-semibold">selected course:</span>{" "}
          {courseDetails.name}
        </p>
        <p className="capitalize text-[20px] my-2.5">
          {" "}
          <span className="font-semibold">course fee:</span>{" "}
          {courseDetails.amount} BDT
        </p>
        <div className="grid grid-cols-3 gap-x-[15px] md:gap-x-[30px]">
          <div className="bg-lightBlue py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
            <h1 className="text-[24px] md:text-[32px] flex">
              {courseDetails.duration}
            </h1>
            <p className="text-[20px]">Month</p>
          </div>
          <div className="bg-lightBlue py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
            <h1 className="text-[24px] md:text-[32px]">
              {courseDetails.total_lecture}
            </h1>
            <p className="text-[20px]">Lectures</p>
          </div>
          <div className="bg-lightBlue py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
            <h1 className="text-[24px] md:text-[32px]">
              {courseDetails.total_project}
            </h1>
            <p className="text-[20px]">Projects</p>
          </div>
        </div>
      </div>
      <div className="mt-5 shadow rounded-xl p-5">
        <h5 className="font-semibold text-[24px] capitalize">
          payment information
        </h5>
        <div className="grid md:grid-cols-2 gap-4 mt-5">
          <Select
            label="Select Payment Method"
            color="blue"
            onChange={(value) => setPaymentMethod(value)}
          >
            <Option value="bkash">Bkash</Option>
            <Option value="nagod">Nagad</Option>
            <Option value="roket">Rocket</Option>
          </Select>
          <Input
            type="text"
            onChange={(e) => settransectionid(e.target.value)}
            label="Enter Transection Number"
          />
          <Input
            type="text"
            onChange={(e) => settransectionnumber(e.target.value)}
            label="Enter Transection ID"
          />
        </div>
        <Button
          onClick={handleMakePayment}
          disabled={
            paymentMethod === "" ||
            transectionnumber === "" ||
            transectionid === ""
          }
          className="mt-4 bg-blue flex items-center gap-2"
        >
          Done {loader && <Spinner />}
        </Button>
      </div>
    </section>
  );
}
