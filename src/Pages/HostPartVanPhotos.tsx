import { useRouteLoaderData } from "react-router-dom";

export default function HostPartVanPhotos() {
  const PARTVANDATA = useRouteLoaderData("PartHostVans");
  return (
    <>
      <section className="host-part-van-photos">
        <div className="w-22 h-22">
          <img src={PARTVANDATA.imageUrl} alt={PARTVANDATA.name} />
        </div>
      </section>
    </>
  );
}
