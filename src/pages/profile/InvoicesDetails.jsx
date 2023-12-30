import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo/pathshala-IT.png";
import { Avatar, Card, Typography } from "@material-tailwind/react";
import Loader from "../../shared/loader/Loader";

export default function InvoicesDetails() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState({});
  const [loader, setLoader] = useState(false);

  //get invoices details
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const response = await fetch(
          `https://api.pathshalait.com/api/v1/client/admin/invoice/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const responseData = await response.json();
        if (responseData.status === true) {
          setInvoice(responseData?.data);
        } else {
          console.log("Error making GET request. Status code: " + responseData);
        }
      } catch (error) {
        console.log("Error making GET request: " + error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  //print pdf
  function printDiv(divId) {
    var printContents = document.getElementById(divId).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

  return (
    <section  className="mx-5 md:container md:mx-auto my-10 shadow rounded p-5 max-w-[595px] min-h-[80vh] relative receipt bg-white">
      {loader ? (
        <Loader />
      ) : (
        <div id="invoice-details" >
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold text-blue">Invoice</h2>
            <img src={logo} alt="" className="w-[150px]" />
          </div>
          <div className="mt-4">
            <p className="text-xl">
              Order No : {invoice?.order_id}
            </p>
            <p className="text-xl">
              Date : {invoice?.order_date}
            </p>
          </div>
          <Card className="mt-5 rounded">
            <table className="text-right table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-blue p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal leading-none"
                    >
                      Image
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal leading-none"
                    >
                      Name
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal leading-none"
                    >
                      Price
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal leading-none"
                    >
                      QTY
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue p-4">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal leading-none"
                    >
                      Amount
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">
                    <Avatar src={invoice?.product?.course_image} alt="" />
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {invoice?.product?.name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {invoice?.product?.amount}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      1
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {invoice?.product?.amount}
                    </Typography>
                  </td>
                </tr>
                <tr className="border-t-2 border-blue">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      Sub Total
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {invoice?.payment?.transaction_amount}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      Payment Method
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {invoice?.payment?.payment_method}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      Transection Id
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {invoice?.payment?.transaction_id}
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      Transection Number
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold"
                    >
                      {invoice?.payment?.transaction_number}
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
          <p className="mt-20 text-center text-xl font-semibold text-blue">
            Thank you for choosing us!
          </p>

          <button
            onClick={()=>printDiv("invoice-details")}
            className="px-4 py-2 bg-blue text-white absolute right-5 bottom-5 shadow rounded"
          >
            {loader ? "Downloading ..." : "Download"}
          </button>

          <div className="h-20 w-20 rounded-full bg-blue absolute bottom-0 left-0"></div>
        </div>
      )}
    </section>
  );
}
