import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  const ditch = isRouteErrorResponse(error);
  let errMsg: React.ReactNode | string;
  if (error instanceof Error) {
    errMsg = <h1>Error Occurred : {error.message}</h1>;
  }
  if (error instanceof Response && error.statusText) {
    errMsg = (
      <>
        <p className="mb-5 text-2xl">Error Status Code: {error.status}</p>
        <h1>Error Occurred :{error.statusText}</h1>
      </>
    );
  }

  return (
    <>
      <section className="error-page flex flex-col h-full">
        <MainNavigation />
        <div className="errorBo flex-1 px-6 flex flex-col gap-6 justify-center sm:justify-start sm:mt-10">
          <div className="text-3xl font-semibold">
            {ditch ? (
              <>
                <p className="mb-5 text-2xl">
                  Error Status Code: {error.status}
                </p>
                <h1>Error Occurred : {error.data}</h1>
              </>
            ) : (
              errMsg || (
                <h1>
                  Looks like internal server error. Check Console to see the
                  error. Or contact the owner of the site
                </h1>
              )
            )}
          </div>
          <Button className="bg-black!">
            <Link className="inline-block w-full h-full" to={"/"}>
              Return to home
            </Link>
          </Button>
        </div>
        <Footer />
      </section>
    </>
  );
}
