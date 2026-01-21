import { Link, type RelativeRoutingType } from "react-router-dom";

interface GoBackProps {
  routeToGoBack: string;
  relative?: RelativeRoutingType;
}

export default function GoBack({ routeToGoBack, relative }: GoBackProps) {
  return (
    <>
      <div className="go-backBox mb-5">
        <Link className="underline" to={routeToGoBack} relative={relative}>
          &larr; Back to all vans
        </Link>
      </div>
    </>
  );
}
