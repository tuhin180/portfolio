import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CaseStudy from "../Page/CaseStudy/CaseStudy";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/project/${params.id}`),
        element: <CaseStudy></CaseStudy>,
      },
    ],
  },
]);
export default routes;
