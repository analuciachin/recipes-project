import { useState, useEffect } from "react";
import "./SearchRecipe.css";

export default function SearchRecipe(props) {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleChange = (event) => {
    setSelectedMeal(event.target.value);
  };

  useEffect(() => {
    console.log(selectedMeal);
  }, [selectedMeal]);

  return (
    <>
      <h1>Out of ideas... Let's search for a recipe</h1>
      <label htmlFor="meal">Select a meal type:</label>
      <select value={selectedMeal} onChange={handleChange}>
        <option value="none">Select an option</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="appetizer">Appetizer</option>
        <option value="snack">Snack</option>
        <option value="desert">Dessert</option>
        <option value="beverage">Beverage</option>
      </select>
    </>
  );
}
