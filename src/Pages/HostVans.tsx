import { useLoaderData } from "react-router-dom";
import HostVansComponent from "../Components/HostVansComponent";
import { templateFetch } from "../../utils";
templateFetch;

export default function HostVans() {
  const ALLVANSDATA = useLoaderData();
  return (
    <>
      <section className="host-vans">
        <HostVansComponent data={ALLVANSDATA} />
      </section>
    </>
  );
}

export function loader() {
  return templateFetch("/api/host/vans");
}
