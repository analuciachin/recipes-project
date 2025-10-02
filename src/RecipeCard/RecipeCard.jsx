import { useState } from "react";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function RecipeCard(props) {
  const { recipe_card } = props;
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState(false);

  return (
    <>
      <div className="recipe-card">
        <h3 className="recipe-card__name">{recipe_card.name}</h3>
        <img
          src={recipe_card.image}
          alt={recipe_card.name}
          className="recipe-card__image"
        />
        <p className="recipe-card__cuisine">
          <span>Cuisine:</span> {recipe_card.cuisine}
        </p>
        <p className="recipe-card__meal-type">
          <span>Meal Type:</span> {recipe_card.mealType}
        </p>
        <p className="recipe-card__difficulty">
          <span>Difficulty:</span> {recipe_card.difficulty}
        </p>
        <button onClick={() => navigate(`/recipes/${recipe_card.id}`)}>
          See recipe
        </button>
        <div className="recipe-card__star">
          <FaStar
            onClick={() => setFavourite(!favourite)}
            color={favourite ? "orange" : "gray"}
            size={32}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
}
