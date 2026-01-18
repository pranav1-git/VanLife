import {  useRouteLoaderData } from "react-router-dom";


interface VanKeyAndValueProps {
  title: string;
  value: string;
}

function VanKeyAndValue({ title, value }: VanKeyAndValueProps) {
  return (
    <div className="mb-3 text-[15px]">
      <span className="font-semibold">{title} : </span>
      <span>{value}</span>
    </div>
  );
}

export default function HostPartVanDetails() {
  const PARTVANDATA = useRouteLoaderData("PartHostVans");
  return (
    <>
      <section className="part-host-van-details">
        <VanKeyAndValue title="Name" value={PARTVANDATA.name} />
        <VanKeyAndValue title="Category" value={PARTVANDATA.type} />
        <VanKeyAndValue title="Description" value={PARTVANDATA.description} />
        <VanKeyAndValue title="Visibility" value={"Public"} />
      </section>
    </>
  );
}
