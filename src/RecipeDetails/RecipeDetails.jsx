import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails(props) {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/2`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <div>
        RecipeDetails TEST
        {item.name ? <p>{item.name}</p> : <p>Loading...</p>}
      </div>
    </>
  );
}
