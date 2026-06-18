import Button from "../Components/Button";
import { useNavigate } from "react-router";

export default function Home() {
  let navigate = useNavigate();
  return (
    <>
      <section className="home-page text-white bg-[url(/homebg.png)] bg-center bg-no-repeat bg-cover min-h-full flex items-center">
        <div className=" px-5 py-12 flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="flex-1 text-lg md:text-xl mb-15">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Button onClick={()=>navigate('/vans')} className="px-12">Find Your Van</Button>
        </div>
      </section>
    </>
  );
}
