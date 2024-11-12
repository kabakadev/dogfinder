import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function BreedDetail() {
  const [breedData, setBreedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://localhost:3000/breeds";
  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBreedData(data);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <p>Your dog breeds are still loading!Please be patient.</p>;
  }

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
