import EachNavLink from "./EachNavLink";

export default function HostNavbar() {
  return (
    <>
      <div className="host-navbar px-5 py-8">
        <nav>
          <ul className="flex items-center gap-6 text-app-light">
            <EachNavLink route="." text="Dashboard" />
            <EachNavLink route="income" text="Income" />
            <EachNavLink route="vans" text="Vans" />
            <EachNavLink route="reviews" text="Reviews" />
          </ul>
        </nav>
      </div>
    </>
  );
}
