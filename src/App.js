import "./App.css";
import List from "./pages/list";
import Aritcles from "./pages/article";
import { ReactDOM } from "react";
import {
  createBrowserRouter,
  RouterProvider, 
  Route,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/article",
    element: <Aritcles />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
