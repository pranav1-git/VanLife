import EachNavLink from "./EachNavLink";

export default function HostNavbar() {
  return (
    <>
      <div className="host-navbar p-5">
        <nav>
          <ul className="flex items-center gap-6">
            <EachNavLink route="." text="Dasboard" />
            <EachNavLink route="income" text="Income" />
            <EachNavLink route="vans" text="Vans" />
            <EachNavLink route="reviews" text="Reviews" />
            {/* <li>
              <NavLink
                to={"."}
                className={({ isActive }) =>
                  isActive ? ifActive : ifNotActive
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"income"}
                className={({ isActive }) =>
                  isActive ? ifActive : ifNotActive
                }
              >
                Income
              </NavLink>
            </li>
            <li style={{ color: "#4d4d4d" }}>
              <NavLink
                to={"vans"}
                className={({ isActive }) =>
                  isActive ? ifActive : ifNotActive
                }
              >
                Vans
              </NavLink>
            </li>
            <li style={{ color: "#4d4d4d" }}>
              <NavLink
                to={"reviews"}
                className={({ isActive }) =>
                  isActive ? ifActive : ifNotActive
                }
              >
                Reviews
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}
