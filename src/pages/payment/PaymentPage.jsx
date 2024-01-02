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
import bkash from "../../assets/footer/bKash logo.png";
import nagad from "../../assets/footer/g1438.png";
import rocket from "../../assets/footer/Rocket Logo.png";

export default function PaymentPage() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const courseDetails = JSON.parse(localStorage.getItem("courseDetails"));
  const itemType = localStorage.getItem("item_type");

  const { amount, discount_amount } = courseDetails;
  const [discount, setDiscount] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [transectionid, settransectionid] = useState("");
  const [transectionnumber, settransectionnumber] = useState("");

  //check eligibilaty
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.pathshalait.com/api/v1/client/admin/discount/eligible/${courseDetails.id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const responseData = await response.json();

        if (responseData.status === true) {
          setDiscount(true);
          console.log(responseData);
        } else {
          console.log(
            "Error making GET request. Status code: " + response.status
          );
        }
      } catch (error) {
        console.log("Error making GET request: " + error);
      } finally {
      }
    };

    fetchData();
  }, []);

  //handle make payment
  const handleMakePayment = async () => {
    const formData = new FormData();
    formData.append("item_id", courseDetails.id);
    if (discount) {
      formData.append(
        "amount",
        courseDetails.amount - courseDetails.discount_amount
      );
    } else {
      formData.append("amount", courseDetails.amount);
    }

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
      if (responseData.status === true) {
        toast.success(responseData.message);
        localStorage.removeItem("item_type");
        localStorage.removeItem("courseDetails");
        navigate("/");
      } else {
        toast.error(responseData.message);
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
    <section className="mx-5 md:container md:mx-auto my-10 lg:my-20 grid gap-5 md:gap-10 lg:grid-cols-2">
      <div className="shadow rounded-xl p-5">
        <div className="">
          <p className="capitalize text-[20px] mt-2.5">
            {" "}
            <span className="font-semibold">selected course:</span>{" "}
            {courseDetails.name}
          </p>

          <p className="capitalize text-[20px] my-2.5 flex gap-4">
            {" "}
            <span className="font-semibold">course fee:</span>{" "}
            {discount ? amount - discount_amount : amount} BDT
            {discount && <span className="line text-orange">{amount} BDT</span>}
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
        <div className="mt-5">
          <h5 className="font-semibold text-[24px] capitalize">
            payment information
          </h5>
          <div className="grid md:grid-cols-2 gap-4 mt-5">
            <Select
              label="Select Payment Method"
              color="blue"
              onChange={(value) => setPaymentMethod(value)}
            >
              <Option value="bkash">Bkash (01303110347)</Option>
              <Option value="nagod">Nagad (01303110347)</Option>
              <Option value="roket">Rocket (01303110347)</Option>
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
            Done {loader && <Spinner className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 bg-lightOrange p-5">
        <div>
          <p className="font-semibold text-[20px]">Payment procedure</p>
          <ul className="ml-5 mt-2.5 list-decimal">
            <li>Take a look at details</li>
            <li>Select payment method</li>
            <li>Enter transection number</li>
            <li>Enter transection ID</li>
            <li>Our payment number:01303110347</li>
          </ul>
        </div>
        <div className="">
          <p className="font-semibold text-[20px] text-center">We accept</p>
          <div className="grid grid-cols-2 mt-5 md:grid-cols-3 gap-2 place-items-center">
            <img src={bkash} alt="" />
            <img src={nagad} alt="" />
            <img src={rocket} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
