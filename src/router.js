import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import Search from "./pages/Search";
import BreedDetail from "./pages/BreedDetail";
import AddBreed from "./pages/AddBreed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "breed/:id", element: <BreedDetail /> },
      { path: "addbreed", element: <AddBreed /> },
    ],
  },
]);
export default router;
