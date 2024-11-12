import { useParams } from "react-router-dom";
function BreedDetail() {
  const { id } = useParams();
  return (
    <div>
      <p>Breed Details</p>
      <p>View breeds id:{id}</p>
    </div>
  );
}
export default BreedDetail;
