import { NavLink } from "react-router-dom";

interface EachNavLinkProps {
  route: string;
  text: string;
}

export default function EachNavLink({ route, text }: EachNavLinkProps) {
  const ifActive = `text-app-dark-sec underline decoration-black`;
  const ifNotActive = `hover:text-app-dark-sec hover:underline`;
  return (
    <>
      <li>
        <NavLink
          to={`${route}`}
          className={({ isActive }) => (isActive ? ifActive : ifNotActive)}
        >
          {text}
        </NavLink>
      </li>
    </>
  );
}
