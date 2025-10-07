import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import "./RecipeList.css";

export default function GetRecipes(props) {
  const { onListDataReceived } = props;
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
        // console.log(recipes);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        // console.log(error);
      });
  }, []);

  const handleCardData = (dataFromCard) => {
    setCardData(dataFromCard);
  };

  const replaceRecipe = (recipeIdToReplace, newRecipeData) => {
    const updatedRecipeList = recipes.map((recipe) =>
      recipe.id === recipeIdToReplace ? { ...recipe, ...newRecipeData } : recipe
    );
    setRecipes(updatedRecipeList);
  };

  useEffect(() => {
    if (cardData) {
      // console.log("cardData: ", cardData.id);
      replaceRecipe(cardData.id, cardData);
    }
  }, [cardData]);

  useEffect(() => {
    onListDataReceived(recipes);
  }, [recipes]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="recipe-list">
        {recipes &&
          recipes.map((recipes) => (
            <RecipeCard
              key={recipes.id}
              card={recipes}
              onCardDataReceived={handleCardData}
            />
          ))}
      </div>
    </>
  );
}
