import { useState, useEffect } from "react";
import "./SearchRecipe.css";

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
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <h1>Out of ideas... Let's search for a recipe</h1>
      <label htmlFor="meal">Select a meal type:</label>
      <select value={selectedMeal} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="appetizer">Appetizer</option>
        <option value="snack">Snack</option>
        <option value="desert">Dessert</option>
        <option value="beverage">Beverage</option>
      </select>

      <h1>Search Recipes</h1>
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3 className="recipe-card__name">{recipe.name}</h3>
          </div>
        ))}
    </>
  );
}
