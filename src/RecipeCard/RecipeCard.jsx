import useState from "react";
import "./RecipeCard.css";
import RecipeDetails from "../RecipeDetails/RecipeDetails.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function RecipeCard(props) {
  const { recipe_card } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="recipe-card">
        <h3 className="recipe-card__name">{recipe_card.name}</h3>
        <img
          src={recipe_card.image}
          alt={recipe_card.name}
          className="recipe-card__image"
        />
        <p className="recipe-card__cuisine">Cuisine: {recipe_card.cuisine}</p>
        <p className="recipe-card__meal-type">
          Meal Type: {recipe_card.mealType}
        </p>
        <p className="recipe-card__difficulty">
          Difficulty: {recipe_card.difficulty}
        </p>
        <button onClick={() => navigate(`/recipes/${recipe_card.id}`)}>
          See recipe
        </button>
        {/* <RecipeDetails /> */}
      </div>

      {/* <Routes>
        <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
      </Routes> */}
    </>
  );
}
