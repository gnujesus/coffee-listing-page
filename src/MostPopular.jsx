import { Card } from "./Card";
import { TopDescription } from "./TopDescription";
import backgroundImage from "./assets/dccl--frontend-simple-coffee-listing/bg-cafe.jpg";
import { useEffect, useState } from "react";

const MostPopular = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error: ", error));
  }, [data]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw",
  };

  // Render only popular recipes
  const renderCard = (item, index) => {
    if (item.popular) {
      return (
        <Card
          key={index}
          imageUrl={item.image}
          name={item.name}
          numberOfVotes={item.votes}
          rating={item.rating}
          price={item.price}
          isPopular={item.popular}
          isSoldOut={item.available}
        />
      );
    }
  };

  const renderLoading = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        viewBox="0 0 512 512"
      >
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
      </svg>
    );
  };

  return (
    <div
      className="bg-[#111315] w-full h-full flex place-content-center xs:w-screen"
      style={backgroundStyle}
    >
      {/* 4/5 means 80% */}
      {/* <div className="sm:px-10 px-24 bg-[#1b1d1f] lg:w-4/5 lg:h-4/5 md:w-[820px] md:h-[1500px] sm:w-[460px] sm:h-full md:py-10 lg:my-44 md:my-28 sm:my-28 border border-transparent rounded-lg grid lg:grid-cols-3 lg:grid-rows-3 min-h-screen md:grid-cols-2 md:grid-rows-4 xs:p-8"> */}
      <div className="flex flex-wrap place-items-center place-content-center bg-[#1b1d1f] w-4/5 h-4/3 xs:w-[96%] md:py-10 lg:my-44 md:my-28 sm:my-28 border border-transparent rounded-lg min-h-screen xs:my-20 px-10 xs:px-0">
        {data ? (
          <div className="lg:rows-span-1 lg:col-span-3 md:rows-span-1 md:col-span-2 sm:mb-0 xs:mb-28 flex flex-wrap">
            <TopDescription currentSection="MostPopular" />
          </div>
        ) : (
          renderLoading()
        )}

        {data
          ? data.map((item, index) => renderCard(item, index))
          : // Loading text in case the page takes it's time to load the components
            renderLoading()}
      </div>
    </div>
  );
};

export default MostPopular;
