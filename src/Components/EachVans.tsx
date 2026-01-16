import type { Vans } from "../Types/types";
import VansTypeTag from "./VansTypeTag";

export default function EachVans(props: Vans) {
  return (
    <div className="eachBox">
      <div className="imageBox min-w-60 min-h-60 max-w-100 max-h-100 rounded">
        <img className="object-cover" src={props.imageUrl} alt={props.name} />
      </div>
      <div className="nameandpriceBox">
        <span className="name">{props.name}</span>
        <span className="price">
          {props.price} <span>/day</span>
        </span>
      </div>
      <VansTypeTag tag={props.type} />
    </div>
  );
}
