import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Loader from "../../shared/loader/Loader";
import { FaVideo } from "react-icons/fa6";

export default function FreeCourseVideo() {
  const [loader, setLoader] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [url, setUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoreyId, setCategoreyId] = useState("");

  //get materials
  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      let url = "https://api.pathshalait.com/api/v1/public/free/courses";
      if (categoreyId !== "") {
        url = `https://api.pathshalait.com/api/v1/public/free/courses/${categoreyId}`;
      }
      try {
        const response = await fetch(url);
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
  }, [categoreyId]);

  //get categories
  useEffect(() => {
    fetch("https://api.pathshalait.com/api/v1/category/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code === 200) {
          setCategories(data?.data);
        } else {
          console.log(data);
        }
      });
  }, []);

  return (
    <section className="mx-5 md:container md:mx-auto py-10">
      <h1 className="text-[40px] lg:text-[60px] text-center">Free Contents</h1>
      <div className="flex flex-wrap gap-5 justify-center mt-5">
        <button
          onClick={() => setCategoreyId("")}
          className={`px-4 py-2 rounded-full ${
            categoreyId === "" && "bg-blue text-white"
          }`}
        >
          All
        </button>
        {categories.map((c, i) => (
          <button
            onClick={() => setCategoreyId(c?.id)}
            className={`px-4 py-2 rounded-full ${
              categoreyId === c?.id && "bg-blue text-white"
            }`}
            value={c?.id}
            key={i}
          >
            {c?.name}
          </button>
        ))}
      </div>
      {loader ? (
        <Loader />
      ) : (
        <>
          {materials?.length === 0 ? (
            <div className="min-h-[60vh] shadow-xl rounded-xl flex items-center justify-center">
              <h1 className="text-[40px] lg:text-[60px] text-center py-20">
                No videos yet!
              </h1>
            </div>
          ) : (
            <div>
              <div className="lg:grid lg:grid-cols-2 gap-5 mt-5">
                <div className="flex justify-center">
                  <ReactPlayer
                    controls
                    url={url === "" ? materials[materials.length - 1].url : url}
                  />
                </div>
                <div>
                  {materials?.map((m, i) => (
                    <div
                      key={i}
                      className="mt-2.5 flex justify-between items-center shadow-md rounded-xl p-4"
                    >
                      <div className="flex gap-5 items-center mt-2">
                        <div className="p-2.5 bg-blue rounded-full">
                          <FaVideo className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{m?.title}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setUrl(m?.url)}
                        className="px-4 py-2 rounded-xl bg-blue text-white"
                      >
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
