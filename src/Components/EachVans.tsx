import { Link } from "react-router-dom";
import type { Vans } from "../Types/types";
import VansTypeTag from "./VansTypeTag";

interface EachVansProps extends Vans {
  params: string;
}

export default function EachVans({ params, ...props }: EachVansProps) {
  // console.log(params);
  return (
    <li className="eachBox flex-1">
      <Link to={props.id} state={`${params}`}>
        <div className="imageBox min-w-60 min-h-60 ">
          <img
            className="object-contain rounded"
            src={props.imageUrl}
            alt={props.name}
          />
        </div>
        <div className="nameandpriceBox mt-3 mb-2 font-semibold text-[19px] flex justify-between">
          <span className="name">{props.name}</span>
          <span className="price ">
            ${props.price}
            <span className="text-sm font-normal">/day</span>
          </span>
        </div>
        <VansTypeTag tag={props.type} />
      </Link>
    </li>
  );
}
