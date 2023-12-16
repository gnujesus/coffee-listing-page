import vector from "./assets/dccl--frontend-simple-coffee-listing/vector.svg";
import { Link } from "react-router-dom";

export function TopDescription({ currentSection }) {
  // Background inline style
  const backgroundStyle = {
    backgroundImage: `url(${vector})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "40rem -2%",
    backgroundSize: "350px",
  };

  const whichCurrentSection = () => {
    if (currentSection === "MostPopular") {
      return (
        <>
          <button className="bg-[#6f757c] border border-transparent rounded-lg px-5">
            <Link to="/">Most Popular</Link>
          </button>
          <button className="border border-transparent rounded-lg px-5 hover:bg-gray-800 transform transition duration-500">
            <Link to="/all-recipes">All Recipes</Link>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="border border-transparent rounded-lg px-5 hover:bg-gray-800 transform transition duration-500">
            <Link to="/">Most Popular</Link>
          </button>
          <button className="bg-[#6f757c] border border-transparent rounded-lg px-5">
            <Link to="/all-recipes">All Recipes</Link>
          </button>
        </>
      );
    }
  };

  return (
    <div
      className="h-[240px] sm:h-[300px] w-full flex flex-col text-white lg:mt-20 md:mt-12 sm:mt-10 md:py-5 sm:my-20 gap-10 sm:mb-4 xs:p-5 xs:px-[4px] xs:mb-32 text-center xs:mt-20"
      style={backgroundStyle}
    >
      <h1 className="flex justify-center lg:text-[32px] xs:text-[24px] font-bold">
        {currentSection === "MostPopular"
          ? "Most Popular Recipes"
          : "All Available Recipes"}
      </h1>
      <div className="flex flex-wrap text-center leading-7 font-semibold text-[#6F757C] lg:text-[20px] px-[10vw] xs:px-0 xs:text-sm xs:block">
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly. By Jesús Martínez.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-2 text-[#f3f7ee] font-semibold xs:px-10">
        {whichCurrentSection()}
      </div>
    </div>
  );
}
