import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

export default function RecipeDetails(props) {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        console.log(error);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!details) return <p>No recipe found.</p>;

  return (
    <>
      {details && (
        <div className="recipe-details__container">
          <h1>{details.name}</h1>
          <p className="recipe-details__information">
            <span>Prep time:</span> {details.prepTimeMinutes} minutes
          </p>
          <p className="recipe-details__information">
            <span>Cook time:</span> {details.cookTimeMinutes} minutes
          </p>
          <p className="recipe-details__information">
            <span>Servings:</span> {details.servings}
          </p>
          <p className="recipe-details__information">
            <span>Level of difficulty:</span> {details.difficulty}
          </p>
          <p className="recipe-details__information">
            <span>Cuisine:</span> {details.cuisine}
          </p>
          <p className="recipe-details__information">
            <span>Calories per serving:</span> {details.caloriesPerServing}
          </p>
          <p className="recipe-details__information">
            <span>Meal type:</span> {details.mealType}
          </p>
          <img
            src={details.image}
            alt={details.name}
            className="recipe-details__image"
          />
          <div className="recipe-details__preparation">
            <div className="recipe-details__ingredients">
              <h2>Ingredients</h2>
              <ul>
                {details.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-details__instructions">
              <h2>Instructions</h2>
              <ul>
                {details.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
          <button onClick={() => navigate(`/`)}>Check another recipe</button>
        </div>
      )}
    </>
  );
}
