import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import "./RecipeList.css";
import { FaRegStar } from "react-icons/fa";

export default function GetRecipes() {
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
        console.log(recipes);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleCardData = (dataFromCard) => {
    setCardData(dataFromCard);
  };

  useEffect(() => {
    console.log("new card: ", cardData);
  }, [cardData]); // This effect runs whenever 'count' changes

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
