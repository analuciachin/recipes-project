import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList.jsx";
import RecipeDetails from "./RecipeDetails/RecipeDetails.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <header className="banner-stripes">
          <h1>Food & Drinks Hub</h1>
        </header>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RecipeList />}></Route>
          <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
