import RecipeCard from "../RecipeCard/RecipeCard.jsx";

export default function FavouriteRecipes(props) {
  const { recipes } = props;
  return (
    <>
      <h1>Favourite Recipes</h1>
      <div className="recipe-list">
        <ul>
          {recipes
            .filter((recipe) => recipe.favourite === true)
            .map((recipe) => (
              <li key={recipe.id}>Name: {recipe.name}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
