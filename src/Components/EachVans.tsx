import { Link } from "react-router-dom";
import type { Vans } from "../Types/types";
import VansTypeTag from "./VansTypeTag";

export default function EachVans(props: Vans) {
  return (
    <li className="eachBox">
      <Link to={`${props.id}`}>
        <div className="imageBox w-60 h-60 rounded">
          <img className="object-cover" src={props.imageUrl} alt={props.name} />
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
