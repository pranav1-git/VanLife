import {
  Outlet,
  redirect,
  type LoaderFunctionArgs,
} from "react-router-dom";
import HostNavbar from "../Components/HostNavbar";

export default function Host() {
  return (
    <section className="host">
      <HostNavbar />
      <Outlet />
    </section>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  console.log(url);
  const isUserLoggedIn = localStorage.getItem("loggedIn");
  if (!isUserLoggedIn) {
    throw redirect(`/login?message=You must be logged in first&redirectTo=${url.pathname}`);
  }
  return "You are logged in babe";
}
