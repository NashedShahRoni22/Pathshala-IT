import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../shared/loader/Loader";

export default function Invoices() {
  const [view, setView] = useState(1);
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(false);
  const TABLE_HEAD = ["Image", "Name", "Purchase date", "Action"];

  //get invoices
  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.pathshalait.com/api/v1/client/admin/my_purchases`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const responseData = await response.json();
        if (responseData.status === true) {
          setCourses(responseData?.data?.courses);
          setServices(responseData?.data?.services);
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

  return (
    <section className="mx-5 md:container md:mx-auto my-10">
      <div className="flex gap-5">
        <button
          onClick={() => setView(1)}
          className={`px-4 py-2 rounded-full ${
            view === 1 && "bg-blue text-white"
          }`}
        >
          Courses
        </button>
        <button
          onClick={() => setView(2)}
          className={`px-4 py-2 rounded-full ${
            view === 2 && "bg-blue text-white"
          }`}
        >
          Services
        </button>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <>
          {view === 1 ? (
            <section className="mt-5 p-5">
              {courses?.length > 0 ? (
                <div>
                  <h1 className="text-[18px] md:text-[24px]">
                    Invoices for courses
                  </h1>
                  <Card className="h-full w-full overflow-scroll mt-5">
                    <table className="w-full min-w-max table-auto text-left">
                      <thead>
                        <tr>
                          {TABLE_HEAD.map((head) => (
                            <th
                              key={head}
                              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                              >
                                {head}
                              </Typography>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((c, index) => {
                          const isLast = index === courses.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

                          return (
                            <tr key={index}>
                              <td className={classes}>
                                <Avatar
                                  src={c?.course_details[0]?.course_image}
                                  alt=""
                                />
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {c?.course_details[0]?.course_name}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {c?.purchase_date}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Link
                                  to={`/invoices/${c?.order_id}`}
                                  className="bg-blue px-4 py-2 shadow rounded text-white"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </div>
              ) : (
                <h1 className="text-[18px] md:text-[24px]">
                  You didn't buy any courses yet!
                </h1>
              )}
            </section>
          ) : (
            <section className="mt-5 p-5">
              {services?.length > 0 ? (
                <div>
                  <h1 className="text-[18px] md:text-[24px]">
                    Invoices for services
                  </h1>
                  <Card className="h-full w-full overflow-scroll mt-5">
                    <table className="w-full min-w-max table-auto text-left">
                      <thead>
                        <tr>
                          {TABLE_HEAD.map((head) => (
                            <th
                              key={head}
                              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                              >
                                {head}
                              </Typography>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((c, index) => {
                          const isLast = index === services.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

                          return (
                            <tr key={index}>
                              <td className={classes}>
                                <Avatar
                                  src={c?.course_details[0]?.course_image}
                                  alt=""
                                />
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {c?.course_details[0]?.course_name}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {c?.purchase_date}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  as="a"
                                  href="#"
                                  variant="small"
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  View
                                </Typography>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </div>
              ) : (
                <h1 className="text-[18px] md:text-[24px]">
                  You didn't buy any services yet!
                </h1>
              )}
            </section>
          )}
        </>
      )}
    </section>
  );
}
