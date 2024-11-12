import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BreedListPage() {
  const baseUrl = "http://localhost:3000/breeds";
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>The data is still loading, please wait a moment.</p>;
  }
  return (
    <div>
      <h1>Available Breeds</h1>
      <ul>
        {breeds.map((breed) => {
          <li key={breed.id}>
            <Link to={`/breed/${breed.id}`}>{breed.breed}</Link>{" "}
          </li>;
        })}
      </ul>
    </div>
  );
}
export default BreedListPage;
