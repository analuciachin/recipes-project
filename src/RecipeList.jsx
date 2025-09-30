import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard.jsx";
import "./RecipeList.css";

export default function GetRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        console.log(recipes);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header className="banner-stripes">
        <h1>Food & Drinks Hub</h1>
      </header>
      <div className="recipe-list">
        {recipes &&
          recipes.map((recipes) => (
            <RecipeCard key={recipes.id} details={recipes} />
          ))}
      </div>
    </>
  );
}
