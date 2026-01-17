import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout.tsx";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Vans, { loadVans } from "./Pages/Vans.tsx";
import "../server.js";
import PartVansPage, { getPartVanData } from "./Pages/PartVansPage.tsx";
import Host from "./Pages/Host.tsx";
import HostDasboard from "./Pages/HostDasboard.tsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "host",
          element: <Host />,
          children: [{ index: true, element: <HostDasboard /> }],
        },
        { path: "about", element: <About /> },
        {
          path: "vans",
          element: <Vans />,
          hydrateFallbackElement: <h1>Loading......</h1>,
          loader: loadVans,
        },
        { path: "vans/:id", element: <PartVansPage />, loader: getPartVanData },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
