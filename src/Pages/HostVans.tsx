import { useRouteLoaderData } from "react-router-dom";
import HostVansComponent from "../Components/HostVansComponent";

export default function HostVans() {
  const ALLVANSDATA = useRouteLoaderData("host");
  return (
    <>
      <section className="host-vans">
        <HostVansComponent data={ALLVANSDATA} />
      </section>
    </>
  );
}
