import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  useEffect(() => {
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
          setCourses(responseData?.data?.course);
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
    <section className="mx-5 md:container md:mx-auto my-10">
      <h1 className="text-[18px] md:text-[24px]">Your Courses</h1>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((c,i) => (
          <div key={i} className="shadow rounded">
            <img className="rounded" src={c?.course_details[0]?.course_image} alt="" />
            <p className="mt-2.5 p-2.5">{c?.course_details[0]?.course_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
