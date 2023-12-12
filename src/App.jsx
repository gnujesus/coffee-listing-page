import { Card } from "./Card";
import { TopDescription } from "./TopDescription";
import backgroundImage from "./assets/dccl--frontend-simple-coffee-listing/bg-cafe.jpg";
import { useEffect, useState } from "react";

// Notes for next project:
// Remember to start mobile first, it'll make your life easier

export function App() {
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

  return (
    <div
      className="bg-[#111315] w-full h-full grid place-items-center xs:p-8"
      style={backgroundStyle}
    >
      {/* 4/5 means 80% */}
      <div className="sm:px-10 px-24 bg-[#1b1d1f] lg:w-4/5 lg:h-4/5 md:w-[820px] md:h-[1500px] sm:w-[460px] sm:h-full md:py-10 lg:my-44 md:my-28 sm:my-28 border border-transparent rounded-lg grid lg:grid-cols-3 lg:grid-rows-3 min-h-screen md:grid-cols-2 md:grid-rows-4 xs:p-5">
        <div className="lg:rows-span-1 lg:col-span-3 md:rows-span-1 md:col-span-2 sm:mb-0 xs:mb-28">
          <TopDescription />
        </div>

        {data ? (
          data.map((item, index) => (
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
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
