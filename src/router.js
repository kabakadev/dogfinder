import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import Search from "./pages/Search";
import BreedDetail from "./pages/BreedDetail";
import AddBreed from "./pages/AddBreed";
import BreedListPage from "./pages/BreedListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "breed/:id", element: <BreedDetail /> },
      { path: "addbreed", element: <AddBreed /> },
      { path: "breeds", element: <BreedListPage /> },
    ],
  },
]);
export default router;
