import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import "./RecipeList.css";

export default function GetRecipes() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
        console.log(recipes);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <header className="banner-stripes">
        <h1>Food & Drinks Hub</h1>
      </header>
      <div className="recipe-list">
        {recipes &&
          recipes.map((recipes) => (
            <RecipeCard key={recipes.id} recipe_card={recipes} />
          ))}
      </div>
    </>
  );
}
