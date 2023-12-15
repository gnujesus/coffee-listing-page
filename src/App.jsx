import MostPopular from "./MostPopular";
import AllRecipes from "./AllRecipes";
import { Route, Routes } from "react-router-dom";

// Notes for next project:
// Remember to start mobile first, it'll make your life easier

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MostPopular />} />
        <Route path="all-recipes" element={<AllRecipes />} />
      </Routes>
    </>
  );
}
