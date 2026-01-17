import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout.tsx";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Vans, { loadVans } from "./Pages/Vans.tsx";
import "../server.js";
import PartVansPage, { getPartVanData } from "./Pages/PartVansPage.tsx";
import Host from "./Pages/Host.tsx";
import HostDasboard from "./Pages/HostDasboard.tsx";
import HostIncome from "./Pages/HostIncome.tsx";
import HostVans from "./Pages/HostVans.tsx";
import HostReviews from "./Pages/HostReviews.tsx";

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
          loader: loadVans,
          id: "host",
          children: [
            { index: true, element: <HostDasboard /> },
            { path: "income", element: <HostIncome /> },
            { path: "vans", element: <HostVans /> },
            { path: "reviews", element: <HostReviews /> },
          ],
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
