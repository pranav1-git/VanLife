import { NavLink } from "react-router-dom";

interface EachNavLinkProps {
  route: string;
  text: string | React.ReactNode;
  end?: boolean;
}

export default function EachNavLink({ route, text, end }: EachNavLinkProps) {
  const ifActive = `text-black underline decoration-black`;
  const ifNotActive = `hover:text-app-dark-sec hover:underline`;
  return (
    <li>
      <NavLink
        end={end}
        to={route}
        className={({ isActive }) => (isActive ? ifActive : ifNotActive)}
      >
        {text}
      </NavLink>
    </li>
  );
}
