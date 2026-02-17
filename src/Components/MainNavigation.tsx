import { NavLink } from "react-router-dom";
import EachNavLink from "./EachNavLink";
import avatarIcon from "../assets/avatar-icon.png";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className="flex h-18 items-center gap-5 px-5 font-medium text-app-light">
          <li className="mr-auto font-extrabold text-2xl">
            <NavLink to={"."} className="text-black">
              #VANLIFE
            </NavLink>
          </li>
          <EachNavLink route="host" text="Host" />
          <EachNavLink route="about" text="About" />
          <EachNavLink route="vans" text="Vans" />
          <EachNavLink
            route="login"
            text={<img width={25} src={avatarIcon} alt={avatarIcon} />}
          />
        </ul>
      </nav>
    </header>
  );
}
