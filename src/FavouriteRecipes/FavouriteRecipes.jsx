import { useState, useEffect } from "react";
import "./FavouriteRecipes.css";

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

  useEffect(() => {
    if (recipes) {
      countFavourite();
      console.log("count", count);
    }
  }, [recipes]);

  return (
    <>
      <h1>Favourite Recipes</h1>
      <div className="recipe-list">
        <ul>
          {count > 0 && recipes ? (
            recipes
              .filter((recipe) => recipe.favourite === true)
              .map((recipe) => (
                <li key={recipe.id}>
                  Name: {recipe.name}
                  <div></div>
                </li>
              ))
          ) : (
            <p className="favourite-recipes__no-recipe-message">
              No favourite recipes selected.
            </p>
          )}
        </ul>
      </div>
    </>
  );
}
