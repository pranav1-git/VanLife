import {
  useLoaderData,
  useLocation,
  type LoaderFunctionArgs,
} from "react-router-dom";
import VansTypeTag from "../Components/VansTypeTag";
import GoBack from "../Components/GoBack";
import { templateFetch } from "../../utils";

// import type { Vans } from "../Types/types.ts";

export default function PartVansPage() {
  const data = useLoaderData();
  const { state } = useLocation();
  // console.log(state);
  return (
    <>
      <section className="part-vans p-6">
        <GoBack
          routeToGoBack={`..`}
          relative="path"
          filterState={{ srch: state || "" }}
        />
        <div className="van-data flex flex-col">
          <div className="imageBox min-w-52 min-h-52 max-w-96 max-h-96 mb-8">
            <img
              className="object-contain"
              src={data[0].imageUrl}
              alt={data[0].name}
            />
          </div>
          <VansTypeTag tag={data[0].type} />
          <div className="text-2xl font-semibold mt-3 mb-2">{data[0].name}</div>
          <div className="mb-3">
            <span className="font-semibold text-xl">${data[0].price}</span>
            <span className="font-normal">/day</span>
          </div>
          <div className="text-sm">{data[0].description}</div>
        </div>
      </section>
    </>
  );
}

export function getPartVanData({ params }: LoaderFunctionArgs) {
  return templateFetch(`/api/vans/${params.id}`);
}
