import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails(props) {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/2`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <div>
        RecipeDetails TEST
        {details.name ? <p>{details.name}</p> : <p>Loading...</p>}
      </div>
    </>
  );
}
