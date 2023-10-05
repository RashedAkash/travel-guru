import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../Layouts/MainLayOuts";
import News from "../Pages/News/News";
import Destination from "../Pages/Destination/Destination";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOuts />,
    children: [
      {
        path: '/',
        element:<News />,
      },
      {
        path: '/destination',
        element:<Destination />,
      },
      {
        path: '/blog',
        element:<Blog />,
      },
      {
        path: '/contact',
        element:<Contact />,
      },
      {
        path: '/login',
        element:<Login />,
      },
      {
        path: '/signUp',
        element:<SignUp />,
      },
    ]
  }
])