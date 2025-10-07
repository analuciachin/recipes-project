import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList.jsx";
import RecipeDetails from "./RecipeDetails/RecipeDetails.jsx";
import FavouriteRecipes from "./FavouriteRecipes/FavouriteRecipes.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const [listData, setListData] = useState(null);

  const handleListData = (dataFromList) => {
    setListData(dataFromList);
  };

  // useEffect(() => {
  //   console.log("new list: ", listData);
  // }, [listData]);

  return (
    <>
      <BrowserRouter>
        <header className="banner-stripes">
          <h1>Food & Drinks Hub</h1>
        </header>
        <nav className="app__nav">
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourites</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<RecipeList onListDataReceived={handleListData} />}
          ></Route>
          <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
          <Route
            path="/favourites"
            element={<FavouriteRecipes recipes={listData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
