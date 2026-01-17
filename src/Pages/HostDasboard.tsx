import { Link, useRouteLoaderData } from "react-router-dom";
import { type Vans } from "../Types/types";

export default function HostDasboard() {
  const VANSLIST = useRouteLoaderData("host");
  return (
    <>
      <div className="host-dasboard">
        <div className="totalBox bg-button-orange-third p-5 flex flex-col gap-5">
          <h1 className="font-semibold text-3xl">Welcome</h1>
          <div className="flex justify-between">
            <span className="text-app-light">
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

        <div className="vansListBox px-5 py-7">
          <div className="flex">
            <span className="flex-1 font-semibold text-xl mb-5">
              Your Listed Vans
            </span>
            <span>
              <Link to={"/vans"} className="hover:underline">
                View all
              </Link>
            </span>
          </div>
          <div className="listBox">
            <ul className="flex flex-col gap-5">
              {VANSLIST.slice(0, 3).map((el: Vans) => (
                <li
                  key={el.id}
                  className="bg-white p-5 flex items-center gap-4"
                >
                  <div className="imageBox w-18 h-18">
                    <img
                      className="w-full h-full object-contain"
                      src={el.imageUrl}
                      alt={el.name}
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-xl font-semibold">{el.name}</h1>
                    <p className="text-app-light">${el.price}/day</p>
                  </div>
                  <div className="text-app-light">Edit</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
