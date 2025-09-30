import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList.jsx";
import RecipeDetails from "./RecipeDetails/RecipeDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <RecipeList /> */}
        <Routes>
          <Route path="/" element={<RecipeList />}></Route>
          <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
