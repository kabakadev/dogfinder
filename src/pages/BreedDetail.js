import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  
  Card,
 
  CardMedia,
  
} from "@mui/material";
function BreedDetail() {
  const [breedData, setBreedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://localhost:3000/breeds";
  const { id } = useParams();
  const navigate = useNavigate();

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

  return (
    <div>
      <button onClick={() => navigate("/breeds")}> Go back</button>
      <h1>New Breed info!</h1>
      <h2>{breedData.name}</h2>
      <p>{breedData.description}</p>
      <p>Color: {breedData.color}</p>
      <p>Size: {breedData.size}</p>
      <Card
        sx={{
          maxWidth: 200,
          margin: "1.25rem",
          boxShadow: 3,
          borderRadius: "8px",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={breedData.image}
          alt="an example image"
        />
      </Card>
    </div>
  );
}
export default BreedDetail;
