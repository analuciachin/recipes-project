import { useState, useEffect } from "react";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function RecipeCard(props) {
  const { card, onCardDataReceived } = props;
  const [newCard, setNewCard] = useState(card);
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState(false);

  function handleFavouriteClick() {
    setFavourite(!favourite);
    setNewCard({
      ...newCard,
      favourite: !favourite,
    });
  }
  useEffect(() => {
    onCardDataReceived(newCard);
    // console.log("new card: ", newCard);
  }, [newCard]); // This effect runs whenever 'count' changes

  return (
    <>
      <div className="recipe-card">
        <h3 className="recipe-card__name">{newCard.name}</h3>
        <img
          src={newCard.image}
          alt={newCard.name}
          className="recipe-card__image"
        />
        <p className="recipe-card__cuisine">
          <span>Cuisine:</span> {newCard.cuisine}
        </p>
        <p className="recipe-card__meal-type">
          <span>Meal Type:</span> {newCard.mealType}
        </p>
        <p className="recipe-card__difficulty">
          <span>Difficulty:</span> {newCard.difficulty}
        </p>
        <button onClick={() => navigate(`/recipes/${newCard.id}`)}>
          See recipe
        </button>
        <div className="recipe-card__star">
          <FaStar
            onClick={handleFavouriteClick}
            color={favourite ? "orange" : "gray"}
            size={32}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
}
