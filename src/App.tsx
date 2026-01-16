import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout.tsx";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Vans, { loadVans } from "./Pages/Vans.tsx";
import "../server.js";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "vans",
          element: <Vans />,
          hydrateFallbackElement: <h1>Loading......</h1>,
          loader: loadVans,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
