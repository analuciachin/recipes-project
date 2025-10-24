import { useState, useEffect } from "react";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function RecipeCard(props) {
  const { card, recipes, setRecipes } = props;
  const [error, setError] = useState();
  const navigate = useNavigate();

  function toggleFavourite() {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === card.id
        ? { ...recipe, favourite: !recipe.favourite }
        : recipe
    );
    setRecipes(updatedRecipes);
  }

  function handleDeleteClick(recipeClicked) {
    console.log(recipeClicked);
    fetch(`https://dummyjson.com/recipes/${recipeClicked}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        const updatedRecipes = recipes.map((recipe) =>
          recipe.id === card.id ? { ...recipe, isDeleted: true } : recipe
        );
        setRecipes(updatedRecipes);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <>
      <div className="recipe-card">
        <h3 className="recipe-card__name">{card.name}</h3>
        <img src={card.image} alt={card.name} className="recipe-card__image" />
        <p className="recipe-card__cuisine">
          <span>Cuisine:</span> {card.cuisine}
        </p>
        <p className="recipe-card__meal-type">
          <span>Meal Type:</span> {card.mealType}
        </p>
        <p className="recipe-card__difficulty">
          <span>Difficulty:</span> {card.difficulty}
        </p>
        <button
          className="main-btn"
          onClick={() => navigate(`/recipes/${card.id}`)}
        >
          See recipe
        </button>
        <button className="secondary-btn" onClick={handleDeleteClick}>
          Delete
        </button>
        <div className="recipe-card__star">
          <FaStar
            onClick={toggleFavourite}
            color={card.favourite ? "orange" : "gray"}
            size={32}
            style={{ cursor: "pointer" }}
          />
        </div>

        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
}
