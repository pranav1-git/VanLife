import { Navigate, Outlet } from "react-router-dom";

export default function CheckAuthentication() {
  const isUserLoggedIn = false;
  if (!isUserLoggedIn) {
    return (
      <Navigate to={"/login"} state={{ message: "i am a disco dancer" }} />
    );
  }
  return <Outlet />;
}
