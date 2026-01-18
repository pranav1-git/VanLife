import { Link, useLocation } from "react-router-dom";
import type { Vans } from "../Types/types.ts";
interface HostVansComponentProps {
  data: Vans[];
}

export default function HostVansComponent({ data }: HostVansComponentProps) {
  const { pathname } = useLocation();
  const isThatRoute = pathname !== "/host/vans";
  return (
    <>
      <div className="vansListBox px-5 py-7">
        <div className="flex">
          <span className="flex-1 font-semibold text-2xl mb-5">
            Your Listed Vans
          </span>
          {isThatRoute && (
            <span>
              <Link to={"/vans"} className="hover:underline">
                View all
              </Link>
            </span>
          )}
        </div>
        <div className="listBox">
          <ul className="flex flex-col gap-5">
            {data.slice(0, 3).map((el: Vans) => (
              <Link key={el.id} to={`${el.id}`}>
                <li className="bg-white p-5 flex items-center gap-4">
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
                  {isThatRoute && <div className="text-app-light">Edit</div>}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
