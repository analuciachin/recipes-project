import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList.jsx";
import RecipeDetails from "./RecipeDetails/RecipeDetails.jsx";
import SearchRecipe from "./SearchRecipe/SearchRecipe.jsx";
import FavouriteRecipes from "./FavouriteRecipes/FavouriteRecipes.jsx";

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <BrowserRouter>
        <header className="banner-stripes">
          <h1>Food & Drinks Hub</h1>
        </header>
        <nav className="app__nav">
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourites</Link>
          <Link to="/search">Search Recipe</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<RecipeList recipes={recipes} setRecipes={setRecipes} />}
          ></Route>
          <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
          <Route
            path="/favourites"
            element={<FavouriteRecipes recipes={recipes} />}
          ></Route>
          <Route path="/search" element={<SearchRecipe />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
