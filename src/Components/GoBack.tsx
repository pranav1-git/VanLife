import { Link } from "react-router-dom";

interface GoBackProps {
  routeToGoBack: string;
}

export default function GoBack({ routeToGoBack }: GoBackProps) {
  return (
    <>
      <div className="go-backBox mb-5">
        <Link className="underline" to={routeToGoBack}>
          &larr; Back to all vans
        </Link>
      </div>
    </>
  );
}
