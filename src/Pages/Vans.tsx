import { type Vans } from "../Types/types.ts";
import EachVans from "../Components/EachVans.tsx";
// import EachFilter from "../Components/EachFilter.tsx";

import { useLoaderData, useSearchParams } from "react-router-dom";
import FilterVans from "../Components/FilterVans.tsx";
import { templateFetch } from "../../utils.ts";

export default function Vans() {
  let VANSDATA: Vans[] = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.getAll("type");

  // console.log(param);

  function handleSetSearchParams(type: string) {
    setSearchParams((prevSearchParams) => {
      !prevSearchParams.has("type", type) &&
        prevSearchParams.append("type", type);
      return prevSearchParams;
    });
  }

  if (
    param.length &&
    param.every((el) => ["simple", "luxury", "rugged"].includes(el))
  ) {
    VANSDATA = VANSDATA.filter((el) => param.includes(el.type));
  }
  return (
    <>
      <section className="vans-page p-5 min-h-full">
        <h1 className="text-[26px] font-semibold mb-4">
          Explore our vans options
        </h1>
        <div className="filterBox mb-10">
          <FilterVans param={param} setterFunc={handleSetSearchParams} />
        </div>
        <ul className="vansListBox flex flex-wrap gap-6">
          {VANSDATA.map((el) => (
            <EachVans key={el.id} {...el} params={searchParams.toString()} />
          ))}
        </ul>
      </section>
    </>
  );
}

export function loadVans() {
  return templateFetch("/api/vans");
}
