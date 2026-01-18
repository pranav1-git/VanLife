import { useRouteLoaderData } from "react-router-dom";
import HostVansComponent from "../Components/HostVansComponent";

export default function HostDasboard() {
  const VANSLIST = useRouteLoaderData("host");
  return (
    <>
      <div className="host-dasboard">
        <div className="totalBox bg-button-orange-third p-5 flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">Welcome</h1>
          <div className="flex justify-between">
            <span className="text-app-light ">
              Income last
              <span className="font-semibold underline">30 days</span>
            </span>
            <span>Details</span>
          </div>
          <h1 className="text-4xl font-bold">$2,260</h1>
        </div>
        <div className="reviewBox bg-button-orange-fourth px-5 py-7 flex items-center gap-5">
          <span className="font-semibold text-lg">Review Score</span>
          <span className="flex-1">
            <span className="font-semibold">5.0</span>
            <span>/5</span>
          </span>
          <span className="">Details</span>
        </div>

        <HostVansComponent data={VANSLIST} />
      </div>
    </>
  );
}
