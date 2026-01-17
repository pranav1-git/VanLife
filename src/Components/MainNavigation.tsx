import { NavLink } from "react-router-dom";
import EachNavLink from "./EachNavLink";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className="flex h-20 items-center gap-5 px-5 font-medium text-app-light">
          <li className="mr-auto font-extrabold text-2xl">
            <NavLink to={"/"} className="text-black">
              #VANLIFE
            </NavLink>
          </li>
          <EachNavLink route="host" text="Host" />
          <EachNavLink route="about" text="About" />
          <EachNavLink route="vans" text="Vans" />
          {/* <li>
            <NavLink
              to={"/host"}
              className={({ isActive }) => (isActive ? ifActive : ifNotActive)}
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? ifActive : ifNotActive)}
            >
              About
            </NavLink>
          </li>
          <li style={{ color: "#4d4d4d" }}>
            <NavLink
              to={"/vans"}
              className={({ isActive }) => (isActive ? ifActive : ifNotActive)}
            >
              Vans
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
