import "./FavouriteRecipes.css";

export default function FavouriteRecipes(props) {
  const { recipes } = props;
  console.log("favourite", recipes);
  return (
    <>
      <h1>Favourite Recipes</h1>
      <div className="recipe-list">
        <ul>
          {recipes ? (
            recipes
              .filter((recipe) => recipe.favourite === true)
              .map((recipe) => (
                <li key={recipe.id}>
                  Name: {recipe.name}
                  <div></div>
                </li>
              ))
          ) : (
            <p className="favourite-recipes__no-recipe-message">
              No favourite recipes selected.
            </p>
          )}
        </ul>
      </div>
    </>
  );
}
