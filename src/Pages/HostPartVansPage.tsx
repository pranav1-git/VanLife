import {
  useLoaderData,
  Outlet,
  type LoaderFunctionArgs,
} from "react-router-dom";
import GoBack from "../Components/GoBack";
import { type Vans } from "../Types/types";
import VansTypeTag from "../Components/VansTypeTag";
import EachNavLink from "../Components/EachNavLink";
import TemplateNavbar from "../Components/TemplateNavbar";

export default function HostPartVansPage() {
  //   const { id } = useParams();
  const [PARTVANDATA]: Vans[] = useLoaderData();
  return (
    <section className="host-particular-vans-page p-5">
      <GoBack routeToGoBack=".." relative="path" />
      <div className="van-box bg-white p-5">
        <div className="van-img-type-title-price flex gap-6">
          <div className="imageBox w-38 h-38">
            <img
              className="object-contain"
              src={PARTVANDATA.imageUrl}
              alt={PARTVANDATA.name}
            />
          </div>
          <div className="otherBox pt-3 font-semibold">
            <VansTypeTag tag={`${PARTVANDATA.type}`} />
            <div className="van-name text-xl mt-3 mb-1">{PARTVANDATA.name}</div>
            <div className="text-lg">
              <span>${PARTVANDATA.price}</span>
              <span className="font-normal">/day</span>
            </div>
          </div>
        </div>
        <section className="detail-about-part-host-van-page">
          <TemplateNavbar>
            <EachNavLink route="." text="Details" end />
            <EachNavLink route="pricing" text="Pricing" />
            <EachNavLink route="photos" text="Photos" />
          </TemplateNavbar>
          <Outlet />
        </section>
      </div>
    </section>
  );
}

export async function loader({ params }: LoaderFunctionArgs): Promise<Vans> {
  const response = await fetch(`/api/host/vans/${params.id}`);
  const data = await response.json();
  return data.vans;
}
