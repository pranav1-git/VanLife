import {
  Outlet,
  redirect,
  useLoaderData,
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
    const response = redirect(
      `/login?message=You must be logged in first&redirectTo=${url.pathname}`,
    );
    response.body = true;
    throw response;
  }
  return "You are logged in babe";
}
