import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [view, setView] = useState(1);
  const [courses, setCourses] = useState([]);
  const [services, setServices] = useState([]);

  //get dashboard
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
          setCourses(responseData?.data?.courses);
          setServices(responseData?.data?.services);
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
      <div className="flex gap-5">
        <button
          onClick={() => setView(1)}
          className={`px-4 py-2 rounded-xl border-2 border-blue ${
            view === 1 && "bg-blue text-white"
          }`}
        >
          Courses
        </button>
        <button
          onClick={() => setView(2)}
          className={`px-4 py-2 rounded-xl border-2 border-blue ${
            view === 2 && "bg-blue text-white"
          }`}
        >
          Services
        </button>
      </div>

      {view === 1 ? (
        <section className="mt-5 shadow shadow-blue rounded-xl p-5">
          {courses?.length > 0 ? (
            <div>
              <h1 className="text-[18px] md:text-[24px]">Your courses</h1>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {courses?.map((c, i) => (
                  <div key={i} className="border rounded">
                    <img
                      className="rounded"
                      src={c?.course_details[0]?.course_image}
                      alt=""
                    />
                    <p className="mt-2.5 p-2.5">
                      {c?.course_details[0]?.course_name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h1 className="text-[18px] md:text-[24px]">
              You didn't buy any courses yet!
            </h1>
          )}
        </section>
      ) : (
        <section className="mt-5 shadow shadow-blue rounded-xl p-5">
          {services?.length > 0 ? (
            <div>
              <h1 className="text-[18px] md:text-[24px]">Your courses</h1>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {services?.map((c, i) => (
                  <div key={i} className="border rounded">
                    <img
                      className="rounded"
                      src={c?.course_details[0]?.course_image}
                      alt=""
                    />
                    <p className="mt-2.5 p-2.5">
                      {c?.course_details[0]?.course_name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h1 className="text-[18px] md:text-[24px]">
              You didn't buy any services yet!
            </h1>
          )}
        </section>
      )}
    </section>
  );
}
