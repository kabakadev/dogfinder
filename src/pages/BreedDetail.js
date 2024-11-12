import { useParams } from "react-router-dom";
function BreedDetail() {
  const { id } = useParams();
  const breedData = {
    1: { name: "rotweller", description: "angry and mad" },
    2: { name: "rhodesian ridgeback", description: "known for hunting lions" },
  };
  const breed = breedData[id];
  return (
    <div>
      <h1>New Breed info!</h1>
      <p>{breed.name}</p>
      <p>{breed.description}</p>
      <p>View breeds id:{id}</p>
    </div>
  );
}
export default BreedDetail;
