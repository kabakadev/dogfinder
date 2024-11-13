import { useEffect, useState } from "react";

import Search from "../components/Search";
import BreedCard from "../components/BreedCard";

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
    breed.breed.toLowerCase().includes(search.toLowerCase())
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
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </ul>
    </div>
  );
}
export default BreedListPage;
