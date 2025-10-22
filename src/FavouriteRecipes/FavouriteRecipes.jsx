import { useState, useEffect } from "react";
import "./FavouriteRecipes.css";
import RecipeCardLight from "../RecipeCardLight/RecipeCardLight.jsx";

export default function FavouriteRecipes(props) {
  const { recipes } = props;
  const [count, setCount] = useState(0);

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
          <RecipeCardLight recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </>
  );
}
