import "./RecipeCardLight.css";
import { useNavigate } from "react-router-dom";

export default function RecipeCardLight(props) {
  const navigate = useNavigate();
  const { recipe } = props;

  return (
    <>
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
    </>
  );
}
