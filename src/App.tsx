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
import HostVans, { loader as loadHostVans } from "./Pages/HostVans.tsx";
import HostReviews from "./Pages/HostReviews.tsx";
import HostPartVansPage, {
  loader as getHostPartVanData,
} from "./Pages/HostPartVansPage.tsx";
import HostPartVanDetails from "./Pages/HostPartVanDetails.tsx";
import HostPartVanPricing from "./Pages/HostPartVanPricing.tsx";
import HostPartVanPhotos from "./Pages/HostPartVanPhotos.tsx";
import HostDasbhoardVanPage from "./Pages/HostDasbhoardVanPage.tsx";

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
          id: "host",
          children: [
            { index: true, loader: loadHostVans, element: <HostDasboard /> },
            { path: ":id", element: <HostDasbhoardVanPage /> },
            { path: "income", element: <HostIncome /> },
            { path: "reviews", element: <HostReviews /> },
            {
              path: "vans",
              loader: loadHostVans,
              element: <HostVans />,
            },
            {
              path: "vans/:id",
              element: <HostPartVansPage />,
              loader: getHostPartVanData,
              id: "PartHostVans",
              children: [
                { index: true, element: <HostPartVanDetails /> },
                { path: "pricing", element: <HostPartVanPricing /> },
                { path: "photos", element: <HostPartVanPhotos /> },
              ],
            },
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

// finaly understood the 'relative' prop on the Link react-router-dom component
