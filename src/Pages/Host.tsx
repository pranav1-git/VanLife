import { Outlet } from "react-router-dom";
import HostNavbar from "../Components/HostNavbar";

export default function Host() {
  return (
    <section className="host">
      <HostNavbar />
      <Outlet />
    </section>
  );
}
