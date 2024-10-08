import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children:[  {
        path: "/",
        element: <Home/>,
      },
      {
        path:'/contact',
        element:<Contact />,
      }
      ],
  },
 
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
