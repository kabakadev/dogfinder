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
    <div className="bg-gray-200 p-8">
      <h1 className="text-2xl font-bold mb-2 flex justify-center items-center">
        Available Breeds
      </h1>
      <Search search={search} setSearch={setSearch} />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {filteredBreeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
export default BreedListPage;
