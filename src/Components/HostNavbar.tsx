import EachNavLink from "./EachNavLink";
import TemplateNavbar from "./TemplateNavbar";

export default function HostNavbar() {
  return (
    <>
      <TemplateNavbar className="px-5">
        <EachNavLink route="." text="Dashboard" end={true} />
        <EachNavLink route="income" text="Income" />
        <EachNavLink route="vans" text="Vans" />
        <EachNavLink route="reviews" text="Reviews" />
      </TemplateNavbar>
    </>
  );
}
