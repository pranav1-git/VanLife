import { type Vans } from "../Types/types.ts";
import EachVans from "../Components/EachVans.tsx";

import { useLoaderData } from "react-router-dom";
export default function Vans() {
  const VANSDATA: Vans[] = useLoaderData();
  console.log(VANSDATA);
  return (
    <>
      <section className="vans-page px-5 py-5 min-h-full">
        <h1 className="text-[26px] font-semibold mb-5">
          Explore our vans options
        </h1>
        <div className="vansListBox flex flex-wrap gap-6">
          {VANSDATA.map((el) => (
            <EachVans key={el.id} {...el} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function loadVans(): Promise<Vans[]> {
  const response = await fetch("/api/vans");
  const { vans } = await response.json();
  return vans;
}
