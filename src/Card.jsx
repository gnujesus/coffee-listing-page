/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// name: string
// numberOfVotes: number
// rating: number
// price: number
// isPopular: boolean
import starFill from "./assets/dccl--frontend-simple-coffee-listing/Star_fill.svg";
import star from "./assets/dccl--frontend-simple-coffee-listing/Star.svg";

// Remember to surround parameters with {}
export function Card({
  key,
  imageUrl,
  name,
  numberOfVotes,
  rating,
  price,
  isPopular,
  isSoldOut = false,
}) {
  // URL object for the coffee images
  let url = {
    cappuccino:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg",
    housecoffee:
      "https://www.comedera.com/wp-content/uploads/2022/09/Mocaccino-shutterstock_2086443826.jpg",
    espresso:
      "https://spoonuniversity.com/cdn-cgi/image/width=1024,f=auto/https://s3.amazonaws.com/secretsaucefiles/photos/images/000/170/822/original/espresso.jpg?1499291377",
    coffeelatte:
      "https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg",
    chocolatecoffee:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2022/08/hot-chocolate-1.jpeg",
    valentinespecial:
      "https://theexoticbean.com/wp-content/uploads/2019/02/valentines-coffee.jpg",
  };

  // Just a default url for testing
  let coffeeName = name.toLowerCase().replace(/\s+/g, "");
  let currentUrl = url[coffeeName];

  // CSS Style
  let backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  // isVisible checks if isPopular. If it is, displays the element, else it doesn't (check the last class `invisible`).
  // Remember that to put variables inside a string, use ${}, not $()
  //
  let popularTag = `mt-2 ml-2 text-[#111315] bg-[#f6c768] h-6 w-20 grid place-content-center border border-transparent rounded-2xl text-xs font-semibold ${
    isPopular ? "" : "invisible"
  }`;

  let soldOutTag = `text-[#ed735d] ${isSoldOut ? "invisible" : ""}`;

  // Check if the number of votes is major than 0, if it is, display, else, `No rating`
  let hasRating = numberOfVotes > 0 ? `(${numberOfVotes} votes)` : "No rating";

  return (
    <div className="flex flex-col gap-5 text-md tracking-wide align-middle w-80 h-80 m-10 md:w-72 md:h-72 sm:my-5 xs:w-[90%] xs:mb-2">
      {/* CSS style applied here */}
      {/* Remember to not use `border border-transparent` if not necessary. It was screwing up the img background */}
      <div
        className="text-white bg-white h-52 w-full xs:h-1/2 rounded-lg tracking-wide align-middle relative overflow-hidden bg-cover bg-center"
        style={backgroundStyle}
      >
        <div className={popularTag}>
          <span>Popular</span>
        </div>
      </div>

      <div className="text-white border border-transparent rounded-lg flex flex-col gap-1 align-middle font-bold">
        <div className="flex flex-row justify-between gap-7 mx-3 text-lg mt-3 ">
          <button className="px-2 rounded-xl hover:bg-white hover:text-[#111315] transform transition duration-500">
            <p>{name}</p>
          </button>
          <button className="text-[12px] text-black bg-[#BEE3CC] hover:bg-[#111315] hover:text-white transform transition duration-500 px-4 border border-transparent rounded-lg font-semibold">
            <p>
              <span>$</span>
              {price}
            </p>
          </button>
        </div>
        <div className="align-middle mx-3 flex flex-row gap-1 text-md text-white mt-1">
          {/* Evaluate if the number of votes is major than 0. If it is, it has rating, otherwise, display empty star */}
          <img src={numberOfVotes > 0 ? starFill : star} />
          <div className="flex gap-1 justify-between w-full">
            <div className="flex gap-2">
              <p className="">{rating}</p>
              <p className="pt-[2px] text-sm text-gray-400">{hasRating}</p>
            </div>
            <p className={soldOutTag}>Sold Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
