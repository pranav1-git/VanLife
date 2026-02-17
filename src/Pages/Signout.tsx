import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Signout() {
  const navigate = useNavigate();
  function handleSignout(value: "yes" | "no") {
    console.log("boys something happen");
    if (value === "yes") {
      localStorage.removeItem("loggedIn");
      navigate("/login");
    }
    if (value === "no") {
      navigate("..", { relative: "route" });
    }
  }
  return (
    <>
      <div>
        <h1>Really Want to singnout ??? </h1>
        <div className="flex gap-5">
          <Button onClick={() => handleSignout("yes")} className="px-5">
            Yes
          </Button>
          <Button onClick={() => handleSignout("no")} className="px-5">
            No
          </Button>
        </div>
      </div>
    </>
  );
}
