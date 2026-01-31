import { Link, type RelativeRoutingType } from "react-router-dom";

interface GoBackProps {
  routeToGoBack: string;
  relative?: RelativeRoutingType;
  filterState?: { srch: string | "" };
}

export default function GoBack({ relative, filterState }: GoBackProps) {
  const value = new URLSearchParams(filterState?.srch).getAll("type");
  return (
    <>
      <div className="go-backBox mb-5">
        <Link
          className="underline"
          to={{ pathname: "..", search: filterState?.srch }}
          relative={relative}
        >
          &larr; Back to {(value.length <= 2 && value.toString()) || "all"} vans
        </Link>
      </div>
    </>
  );
}
