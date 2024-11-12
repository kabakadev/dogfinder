import { useEffect } from "react";

function BreedListPage() {
  const baseUrl = "http://localhost:3000/breeds";
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>BreedListPage</div>;
}
export default BreedListPage;
