import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../shared/loader/Loader";
import { BsBook } from "react-icons/bs";

export default function CourseView() {
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});

  // get courses data
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.pathshalait.com/api/v1/course/view/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setCourseDetails(data.data);
          setLoader(false);
        } else {
          console.log(data);
          setLoader(false);
        }
      });
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section>
          <div className="bg-lightBlue py-10 lg:py-20">
            <div className="flex flex-col-reverse lg:flex-row gap-[30px] mx-5 md:container md:mx-auto">
              <div className="lg:w-1/2 flex flex-col gap-6">
                <p className="text-[18px] md:text-[24px]">
                  {courseDetails?.slogan}
                </p>
                <h1 className="text-[24px] md:text-[40px]">
                  {courseDetails?.name}
                </h1>
                <div className="grid grid-cols-3 gap-x-[15px] md:gap-x-[30px]">
                  <div className="bg-lightOrange py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
                    <h1 className="text-[24px] md:text-[32px] flex">
                      {courseDetails?.duration}
                    </h1>
                    <p className="text-[20px]">Month</p>
                  </div>
                  <div className="bg-lightOrange py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
                    <h1 className="text-[24px] md:text-[32px]">
                      {courseDetails?.total_lecture}
                    </h1>
                    <p className="text-[20px]">Lectures</p>
                  </div>
                  <div className="bg-lightOrange py-[12px] px-[16px] flex flex-col items-center justify-center rounded-xl">
                    <h1 className="text-[24px] md:text-[32px]">
                      {courseDetails?.total_project}
                    </h1>
                    <p className="text-[20px]">Projects</p>
                  </div>
                </div>
                <p className="text-[18px]">{courseDetails?.course_overview}</p>
                <Link to="/payment" className="py-2 px-4 w-fit bg-blue text-white rounded flex items-center gap-2.5">
                  Enroll Now <BsBook className="text-xl" />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={courseDetails?.course_image}
                  className="rounded-xl"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="my-[40px] md:my-[80px] mx-5 md:container md:mx-auto">
            <div>
              <h1 className="text-[24px] md:text-[40px]">Course Overview</h1>
              <p className="text-[18px] mt-[16px] md:mt-[32px]">
                {courseDetails?.course_overview}
              </p>
            </div>
            <div className="bg-lightOrange pl-[20px] py-[40px]  my-[30px] md:mt-[60px] rounded-xl">
              <h1 className="text-[24px] md:text-[40px]">Course Curriculum</h1>
              <ul className="mt-[24px] md:mt-[48px] grid grid-cols-2 list-disc ml-[12px]">
                {courseDetails?.course_curriculum?.map((cc, i) => (
                  <li className="text-[18px]" key={i}>
                    {cc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-lightOrange pl-[20px] py-[40px]  my-[30px] md:mt-[60px] rounded-xl">
              <h1 className="text-[24px] md:text-[40px]">
                Softwares You'll Learn
              </h1>
              <ul className="mt-[24px] md:mt-[48px] grid grid-cols-2">
                {courseDetails?.all_tools?.software?.map((ts, i) => (
                  <li
                    className="text-[16px] flex items-center gap-[8px]"
                    key={i}
                  >
                    <img
                      className="h-[24px] md:h-[48px] w-[24px] md:w-[48px]"
                      src={ts?.icon}
                      alt=""
                    />
                    <p className="text-[14px] md:text-[18px]">{ts?.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-lightOrange pl-[20px] py-[40px]  my-[30px] md:my-[60px] rounded-xl">
              <h1 className="text-[24px] md:text-[40px]">
                This Course is Designed for
              </h1>
              <ul className="mt-[24px] md:mt-[48px] grid grid-cols-2">
                {courseDetails?.all_tools?.profession?.map((ts, i) => (
                  <li
                    className="text-[16px] flex items-center gap-[8px]"
                    key={i}
                  >
                    <img
                      className="h-[24px] md:h-[48px] w-[24px] md:w-[48px]"
                      src={ts?.icon}
                      alt=""
                    />
                    <p className="text-[14px] md:text-[18px]">{ts?.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
