import { useLoaderData } from "react-router-dom";
import HostVansComponent from "../Components/HostVansComponent";
import { type Vans } from "../Types/types";

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

export async function loader(): Promise<Vans[]> {
  const response = await fetch("/api/host/vans");
  const { vans } = await response.json();
  return vans;
}
