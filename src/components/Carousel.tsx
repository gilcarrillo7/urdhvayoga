import * as React from "react";
import useImage from "../useImage";
import Loader from "./Loader";

const Carousel = () => {
  const { loaded } = useImage("../images/home/imgA1.jpg");

  return (
    <div className="w-full">
      {loaded ? (
        <Loader />
      ) : (
        <div className="bg-[url('../images/home/imgA1.jpg')] w-full h-screen bg-cover bg-[30%] bg-no-repeat" />
      )}
    </div>
  );
};

export default Carousel;
