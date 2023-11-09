import React from "react";
import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <BeatLoader
        color={"#1573FF"}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
