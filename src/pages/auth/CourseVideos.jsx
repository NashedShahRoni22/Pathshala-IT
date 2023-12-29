import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";
import Loader from "../../shared/loader/Loader";
import ReactPlayer from "react-player";

export default function CourseVideos() {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [url, setUrl] = useState("")
  //get materials
  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.pathshalait.com/api/v1/client/admin/course_materials/videos/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        const responseData = await response.json();

        if (responseData.status === true) {
          setMaterials(responseData?.data);
        } else {
          console.log(
            "Error making GET request. Status code: " + response.status
          );
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
    <section className="mx-5 md:container md:mx-auto py-10">
      {loader ? (
        <Loader />
      ) : (
        <>
          {materials.length === 0 ? (
            <h1 className="text-xl text-center">No content yet!</h1>
          ) : (
            <div>
              <h1 className="text-xl">
                Total content uploaded: {materials?.length}
              </h1>
              <div className="lg:grid lg:grid-cols-2 gap-5 mt-5">
                <div className="flex justify-center">
                  <ReactPlayer controls url={ url === "" ? materials[materials.length - 1].url : url } />
                </div>
                <div>
                  {materials.map((m,i) => (
                    <div key={i} className="mt-2.5 flex justify-between items-center shadow-md rounded-xl p-4">
                      <div className="flex gap-5 items-center mt-2">
                        <div className="p-2.5 bg-blue rounded-full">
                          <FaVideo className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{m?.title}</p>
                          <p>{m?.class_started_date}</p>
                        </div>
                      </div>
                      <button onClick={()=> setUrl(m?.url)} className="px-4 py-2 rounded-xl bg-blue text-white">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
