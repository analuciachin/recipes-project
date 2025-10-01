import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails(props) {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div>{details && <p>{details.name}</p>}</div>
    </>
  );
}
