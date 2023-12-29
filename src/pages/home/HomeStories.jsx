import React, { useEffect, useState } from "react";
import videoIcon from "../../assets/logo/video-icon.png";
import svg from "../../assets/choseUsIcons/Compass.png";
import Loader from "../../shared/loader/Loader";
import { Button, Dialog, Option, Select } from "@material-tailwind/react";
import ReactPlayer from "react-player";

export default function HomeStories() {
  const [stories, setStories] = useState([]);
  const [loader, setLoader] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoreyId, setCategoreyId] = useState("");

  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = useState("");

  const handleOpen = (video) => {
    setOpen(!open);
    setUrl(video);
  };

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

  //get stories
  useEffect(() => {
    setLoader(true);
    let url = "https://api.pathshalait.com/api/v1/public/success/stories";
    if (categoreyId !== "") {
      url = `https://api.pathshalait.com/api/v1/public/success/stories/${categoreyId}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStories(data?.data);
        setLoader(false);
      });
  }, [categoreyId]);

  return (
    <div className="relative">
      <div className="mx-5 md:container md:mx-auto mt-10">
        <h1 className="text-[40px] lg:text-[60px] text-center">
          Success Stories
        </h1>
        <div className="flex flex-wrap gap-5 justify-center mt-5 backdrop-blur-sm bg-white/30 lg:bg-transparent p-5 rounded-full">
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
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className="z-50 mx-5 md:container md:mx-auto my-5 lg:my-10 md:flex md:flex-wrap justify-center gap-[30px]">
          {stories?.length === 0 ? (
            <h1 className="text-[40px] lg:text-[60px] text-center py-20">
              No stories found
            </h1>
          ) : (
            <>
              {stories?.map((d, i) => (
                <div key={i} className="relative my-[12px] md:my-0">
                  <img src={d?.thumbnail_image} alt="" className="" />
                  <button
                    onClick={() => handleOpen(d?.url)}
                    className="absolute top-0 h-full w-full flex justify-center items-center"
                  >
                    <img
                      src={videoIcon}
                      alt=""
                      className="h-[60px] animate-ping"
                    />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      <img
        src={svg}
        alt=""
        className="hidden md:block absolute left-0 top-0 -z-10"
      />

      <Dialog open={open} handler={handleOpen} className="flex justify-center">
        <ReactPlayer controls url={url} />
      </Dialog>
    </div>
  );
}
