import { useState, useEffect } from "react";
// import "./SearchRecipe.css";
import RecipeCardLight from "../RecipeCardLight/RecipeCardLight.jsx";

export default function SearchRecipe(props) {
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipes, setRecipes] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const selectedMeal = event.target.value;
    setSelectedMeal(selectedMeal);

    fetch(`https://dummyjson.com/recipes/meal-type/${selectedMeal}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
        // console.log(data);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <h1>Out of ideas... Let's search for recipes</h1>
      <div className="select-recipes">
        <label htmlFor="meal">Select a meal type:</label>
        <select value={selectedMeal} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="appetizer">Appetizer</option>
          <option value="snack">Snack</option>
          <option value="dessert">Dessert</option>
          <option value="beverage">Beverage</option>
        </select>
      </div>

      <div className="recipe-list">
        {selectedMeal !== "" &&
          recipes &&
          recipes.map((recipe) => (
            <RecipeCardLight recipe={recipe} key={recipe.id} />
          ))}
      </div>
    </>
  );
}
