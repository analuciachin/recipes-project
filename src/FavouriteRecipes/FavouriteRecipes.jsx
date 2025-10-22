import { useState, useEffect } from "react";
import "./FavouriteRecipes.css";
import { useNavigate } from "react-router-dom";

export default function FavouriteRecipes(props) {
  const { recipes } = props;
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function countFavourite() {
    for (const item of recipes) {
      if (item.favourite === true) {
        setCount(count + 1);
      }
    }
  }

  if (!recipes || recipes.length === 0) {
    return <h1>No favourite recipes selected.</h1>;
  }

  const favouriteRecipes = recipes.filter(
    (recipe) => recipe.favourite && !recipe.isDeleted
  );

  if (favouriteRecipes.length === 0) {
    return <h1>No favourite recipes selected.</h1>;
  }

  useEffect(() => {
    if (recipes) {
      countFavourite();
      console.log("count", count);
    }
  }, [recipes]);

  return (
    <>
      <h1>Favourite Recipes ({favouriteRecipes.length})</h1>
      <div className="recipe-list">
        {favouriteRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3 className="recipe-card__name">{recipe.name}</h3>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-card__image"
            />
            <p className="recipe-card__cuisine">
              <span>Cuisine:</span> {recipe.cuisine}
            </p>
            <p className="recipe-card__meal-type">
              <span>Meal Type:</span> {recipe.mealType}
            </p>
            <p className="recipe-card__difficulty">
              <span>Difficulty:</span> {recipe.difficulty}
            </p>
            <button
              className="main-btn"
              onClick={() => navigate(`/recipes/${recipe.id}`)}
            >
              See recipe
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
