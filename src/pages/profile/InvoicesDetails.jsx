import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo/pathshala-IT.png";
import { Avatar, Card, Typography } from "@material-tailwind/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function InvoicesDetails() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState({});
  const [loader, setLoader] = useState(false);

  const downloadPDF =()=>{
    const capture = document.querySelector('.receipt')
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('invoice.pdf');
    })
  }


  //get invoices details
  useEffect(() => {
    const fetchData = async () => {
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
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mx-5 md:container md:mx-auto my-10 shadow rounded p-5 max-w-[595px] min-h-[80vh] relative receipt bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-blue">Invoice</h2>
        <img src={logo} alt="" className="w-[150px]" />
      </div>
      <div className="mt-4">
        <p className="font-semibold text-xl">Order No : {invoice?.order_id}</p>
        <p className="font-semibold text-xl">Date : {invoice?.order_date}</p>
      </div>
      <Card className="mt-5 rounded">
        <table className="text-right table-auto">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Image
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Name
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Price
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  QTY
                </Typography>
              </th>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
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
            <tr className="border-b-2 border-blue">
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
      <p className="mt-20 text-center text-xl font-semibold text-blue">Thank you for choosing us!</p>

      <button onClick={downloadPDF} className="px-4 py-2 bg-blue text-white absolute right-5 bottom-5 shadow rounded">
        {
          loader ? "Downloading ..." : "Download"
        }
      </button>

      <div className="h-20 w-20 rounded-full bg-blue absolute bottom-0 left-0"></div>
    </section>
  );
}
