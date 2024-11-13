import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function BreedCard() {
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
        image="https://images.unsplash.com/photo-1649923625148-1e13d9431053?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="an example image"
      />
      <CardContent>
        <Typography variant="h5" component="div"></Typography>
      </CardContent>
    </Card>
  );
}
export default BreedCard;
