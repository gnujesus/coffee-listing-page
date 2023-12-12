// import { useState } from "react";
import vector from "./assets/dccl--frontend-simple-coffee-listing/vector.svg";

export function TopDescription() {
  // Background inline style
  const backgroundStyle = {
    backgroundImage: `url(${vector})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "40rem -2%",
    backgroundSize: "350px",
  };

  return (
    // <div
    //   className="h-[240px] sm:h-[300px] w-full grid grid-rows-5 sm:grid-rows-3 grid-cols-1 text-white lg:mt-20 md:mt-12 sm:mt-10 md:py-5 sm:my-20 gap-10 sm:mb-4"
    //   style={backgroundStyle}
    // >
    <div
      className="h-[240px] sm:h-[300px] w-full flex flex-col sm:grid-rows-3 grid-cols-1 text-white lg:mt-20 md:mt-12 sm:mt-10 md:py-5 sm:my-20 gap-10 sm:mb-4 xs:mb-10"
      style={backgroundStyle}
    >
      <h1 className="flex justify-center text-[32px] font-bold">
        Our Collection
      </h1>
      <div className="flex text-center leading-7 font-semibold text-[#6F757C] lg:text-[20px] px-[10vw] xs:px-[2vw]">
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-5 text-[#f3f7ee] font-semibold py-1 lg:mt-4 md:mt-4 sm:mt-7 xs:mb-10">
        <button className="bg-[#6f757c] border border-transparent rounded-lg px-5">
          All Products
        </button>
        <button className="border border-transparent rounded-lg px-5 hover:bg-gray-800 transform transition duration-500">
          Available now
        </button>
      </div>
    </div>
  );
}
