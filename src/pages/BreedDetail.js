import { useEffect } from "react";
import { useParams } from "react-router-dom";
function BreedDetail() {
  const baseUrl = "http://localhost:3000/breeds";
  const { id } = useParams();
  // const breedData = {
  //   1: { name: "rotweller", description: "angry and mad" },
  //   2: { name: "rhodesian ridgeback", description: "known for hunting lions" },
  // };
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  const breed = breedData[id];
  return (
    <div>
      <h1>New Breed info!</h1>
      <p>Extra info about a specific breed will appear here.</p>
      <p>{breed.name}</p>
      <p>{breed.description}</p>
      <p>View breeds id:{id}</p>
    </div>
  );
}
export default BreedDetail;
