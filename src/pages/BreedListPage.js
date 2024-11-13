import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function BreedListPage() {
  const [search, setSearch] = useState("");

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
  const filteredBreeds = breeds.filter((breed) =>
    breed.breed.toLowerCase().includes(Search.toLowerCase())
  );
  if (loading) {
    return <p>The data is still loading, please wait a moment.</p>;
  }

  return (
    <div>
      <h1>Available Breeds</h1>
      <Search search={search} setSearch={setSearch} />
      <ul>
        {filteredBreeds.map((breed) => (
          <li key={breed.id}>
            <Link to={`/breed/${breed.id}`}>{breed.breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BreedListPage;
