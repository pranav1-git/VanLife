import { useLoaderData, type LoaderFunctionArgs, Link } from "react-router-dom";
import type { Vans } from "../Types/types";
import VansTypeTag from "../Components/VansTypeTag";

// import type { Vans } from "../Types/types.ts";

export default function PartVansPage() {
  const { name, imageUrl, type, description, price } = useLoaderData();
  //   console.log(partVanData);
  return (
    <>
      <section className="part-vans p-6">
        <div className="mb-5">
          <Link className="underline" to={"/vans"}>
            &larr; Back to all vans
          </Link>
        </div>
        <div className="van-data flex flex-col">
          <div className="imageBox min-w-52 min-h-52 max-w-96 max-h-96 mb-8">
            <img className="object-contain" src={imageUrl} alt={name} />
          </div>
          <VansTypeTag tag={type} />
          <div className="text-2xl font-semibold mt-3 mb-2">{name}</div>
          <div className="mb-2">
            <span className="font-semibold text-xl">${price}</span>
            <span className="font-normal">/day</span>
          </div>
          <div className="text-sm">{description}</div>
        </div>
      </section>
    </>
  );
}

export async function getPartVanData({
  params,
}: LoaderFunctionArgs): Promise<Vans> {
  const response = await fetch(`/api/vans/${params.id}`);
  const { vans } = await response.json();
  return vans;
}
