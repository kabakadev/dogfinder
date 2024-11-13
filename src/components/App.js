import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  const [breeds, setBreeds] = useState([]);
  function onAddBreed(addbreed) {
    setBreeds([...breeds], addbreed);
  }
  return (
    <div>
      <NavBar />
      <Outlet context={{ onAddBreed, breeds }} />
    </div>
  );
}

export default App;
