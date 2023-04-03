import { createBrowserRouter } from "react-router-dom";
import { Home } from "views/Home/Home";
import { PathsEnum } from "constant";
import { Login } from "views/Login/Login";

export const router = createBrowserRouter([
  {
    path: PathsEnum.HOME,
    element: <Home />,
  },
  {
    path: PathsEnum.RESTAURANTS,
    element: <div>2</div>,
  },
  {
    path: PathsEnum.PROFILE,
    element: <div>3</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
