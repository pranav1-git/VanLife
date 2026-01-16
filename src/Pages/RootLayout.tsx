import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";

export default function Default() {
  return (
    <>
      <MainNavigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
