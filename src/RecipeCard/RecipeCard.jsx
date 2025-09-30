import useState from "react";
import "./RecipeCard.css";

export default function RecipeCard(props) {
  const { details } = props;

  return (
    <>
      <div className="recipe-card">
        <h3 className="recipe-card__name">{details.name}</h3>
        <img
          src={details.image}
          alt={details.name}
          className="recipe-card__image"
        />
        <p className="recipe-card__cuisine">Cuisine: {details.cuisine}</p>
        <p className="recipe-card__meal-type">Meal Type: {details.mealType}</p>
        <p className="recipe-card__difficulty">
          Difficulty: {details.difficulty}
        </p>
        <button>See recipe</button>
      </div>
    </>
  );
}
