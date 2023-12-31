import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../shared/loader/Loader";
import { BsBook } from "react-icons/bs";
import careerImg from "../../assets/coursesBarIcons/career.png";
import { Button } from "@material-tailwind/react";

export default function CourseView() {
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  // console.log(courseDetails);

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

  const setItemInLs = (data) => {
    localStorage.setItem("courseDetails", JSON.stringify(data));
    localStorage.setItem("item_type", "course");
  };
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
                <p className="text-[18px]">{courseDetails?.description}</p>
                <Link
                  onClick={() => setItemInLs(courseDetails)}
                  to="/payment"
                  className="py-2 px-4 w-fit bg-blue text-white rounded flex items-center gap-2.5"
                >
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

          <div className="my-[40px] md:my-[80px] mx-5 md:container md:mx-auto flex flex-col gap-[30px] md:flex-row md:gap-[60px]">
            <div className="md:w-2/3">
              <div>
                <h1 className="text-[24px] md:text-[40px]">Course Overview</h1>
                <p className="text-[18px] mt-[16px] md:mt-[32px]">
                  {courseDetails?.course_overview}
                </p>
              </div>
              <div className="bg-lightBlue px-[20px] py-[40px]  my-[30px] md:mt-[60px] rounded-xl">
                <h1 className="text-[24px] md:text-[40px]">
                  Course Curriculum
                </h1>
                <ul className="mt-[24px] md:mt-[48px] grid grid-cols-2 list-disc ml-[12px]">
                  {courseDetails?.course_curriculum?.map((cc, i) => (
                    <li className="text-[18px]" key={i}>
                      {cc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-lightOrange px-[20px] py-[40px]  my-[30px] md:mt-[60px] rounded-xl">
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
              <div className="bg-lightBlue px-[20px] py-[40px]  my-[30px] md:my-[60px] rounded-xl">
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
              <div className="bg-lightOrange px-[20px] py-[40px]  my-[30px] md:my-[60px] rounded-xl">
                <h1 className="text-[24px] md:text-[40px]">
                  Career Opportunities
                </h1>
                <div className="mt-[24px] md:mt-[48px] grid md:grid-cols-2 gap-[34px] md:gap-[68px]">
                  <div>
                    <img src={careerImg} alt="" />
                    <p>{courseDetails?.job_opportunities_1}</p>
                  </div>
                  <div>
                    <img src={careerImg} alt="" />
                    <p>{courseDetails?.job_opportunities_2}</p>
                  </div>
                </div>
              </div>
              <div className="bg-lightBlue px-[20px] py-[40px]  my-[30px] md:my-[60px] rounded-xl">
                <h1 className="text-[24px] md:text-[40px]">
                  Open Job Positions
                </h1>
                <ul className="mt-[24px] md:mt-[48px] grid grid-cols-2 list-disc ml-[12px]">
                  {courseDetails?.job_position?.map((cc, i) => (
                    <li className="text-[18px]" key={i}>
                      {cc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-lightOrange px-[20px] py-[40px]  my-[30px] md:my-[60px] rounded-xl">
                <h1 className="text-[24px] md:text-[32px]">
                  Admission Is Going On
                </h1>
                <p className="text-[16px] md:text-[18px]">
                  Enroll now to any of our Offline (On- Campus) or Online (Live
                  Class) courses as per your suitable time.
                </p>

                <div className="p-[15px] md:p-[30px] bg-blue mt-[16px] md:mt-[32px] rounded-xl text-white">
                  <p className="text-[18px] md:text-[22px]">
                    Course Fee Offline
                  </p>
                  <h1 className="text-[22px] md:text-[26px]">&#2547; {courseDetails?.amount}</h1>
                  <Link
                    onClick={() => setItemInLs(courseDetails)}
                    to="/payment"
                    className="py-2 px-4 w-fit bg-white text-blue rounded flex items-center gap-2.5 mt-[8px] md:mt-[16px]"
                  >
                    Enroll Now <BsBook className="text-xl" />
                  </Link>
                </div>

                <Button className="mt-[8px] md:mt-[16px] w-full bg-orange">
                  Free Seminar
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
