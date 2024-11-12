import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function BreedDetail() {
  const baseUrl = "http://localhost:3000/breeds";
  const { id } = useParams();
  const [breedData, setBreedData] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setBreedData(data));
  }, []);

  console.log(breedData);
  return (
    <div>
      <h1>New Breed info!</h1>
      <p>Extra info about a specific breed will appear here.</p>
      <p>{}</p>
      <p></p>
      <p>View breeds id:{id}</p>
    </div>
  );
}
export default BreedDetail;
