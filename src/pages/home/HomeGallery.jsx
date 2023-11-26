import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

import g1 from "../../assets/SliderImages/1.png";
import g2 from "../../assets/SliderImages/2.png";
import g3 from "../../assets/SliderImages/3.png";
import g4 from "../../assets/SliderImages/4.png";

export default function HomeGallery() {
  const images = [
    {
      original: g1,
      thumbnail: g1,
    },
    {
      original: g2,
      thumbnail: g2,
    },
    {
      original: g3,
      thumbnail: g3,
    },
    {
      original: g4,
      thumbnail: g4,
    },
  ];
  return (
    <div className="mx-5 md:container md:mx-auto my-5 lg:my-10 py-5 lg:py-10">
      <h1 className="text-[40px] lg:text-[60px] text-center">Our Gallery</h1>
      <div className="mt-10">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}
