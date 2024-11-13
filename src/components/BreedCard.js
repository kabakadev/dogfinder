import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function BreedCard({ breed }) {
  return (
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
        image={breed.image}
        alt="an example image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {breed.breed}
        </Typography>
        <Button size="medium" component={Link} to={`/breed/${breed.id}`}>
          View extra info
        </Button>
      </CardContent>
    </Card>
  );
}
export default BreedCard;
