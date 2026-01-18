import { useRouteLoaderData } from "react-router-dom";

export default function HostPartVanPricing() {
  const PARTVANDATA = useRouteLoaderData("PartHostVans");
  return (
    <>
      <section className="part-host-van-pricing">
        <div className="priceBox text-2xl pb-5">
          <span className="font-medium">${PARTVANDATA.price}</span>
          <span className="text-base font-light">/day</span>
        </div>
      </section>
    </>
  );
}
