import { Navigate } from "react-router-dom";
import Home from "../views/home";
import Vote from "../views/vote";
import BlockSearch from "../views/blocksearch"; // ✅ 1. Import the component

const routers = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/vote",
    element: <Vote />,
  },
  {
    path: "/blocksearch",  // ✅ 2. Add the route
    element: <BlockSearch />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default routers;
