import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import "./RecipeList.css";

export default function RecipeList(props) {
  const { recipes, setRecipes } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recipes.length === 0) {
      fetch("https://dummyjson.com/recipes")
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.recipes);
          setLoading(false);
          // console.log(recipes);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
          // console.log(error);
        });
    } else {
      setLoading(false);
    }
  }, [recipes, setRecipes]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="recipe-list">
        {recipes &&
          recipes
            .filter((recipe) => recipe.isDeleted !== true)
            .map((recipe) => (
              <RecipeCard
                key={recipe.id}
                card={recipe}
                setRecipes={setRecipes}
                recipes={recipes}
              />
            ))}
      </div>
    </>
  );
}
