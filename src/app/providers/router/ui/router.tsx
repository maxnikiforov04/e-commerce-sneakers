import { createBrowserRouter } from "react-router-dom";
import { Landing, Magazine } from "../../../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/magazine",
    element: <Magazine />,
  },
]);
