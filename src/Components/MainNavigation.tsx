import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  const ifActive = `text-app-dark-sec underline decoration-black`;
  const ifNotActive = `hover:text-app-dark-sec`;
  return (
    <header>
      <nav>
        <ul className="flex h-20 items-center gap-6 px-6 font-medium text-app-light">
          <li className="mr-auto font-extrabold text-2xl">
            <NavLink to={"/"} className="text-black">
              #VANLIFE
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
          </li>
        </ul>
      </nav>
    </header>
  );
}
