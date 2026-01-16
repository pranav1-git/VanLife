import Button from "../Components/Button";
export default function Home() {
  return (
    <>
      <section className="home-page text-white bg-[url(/homebg.png)] bg-center bg-no-repeat bg-cover min-h-full flex">
        <div className="bg-linear-to-l from-[#0000001a] to-[#0000001a] flex flex-col gap-5 px-5 py-12 flex-1">
          <h1 className="text-3xl font-extrabold">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="flex-1 font-medium text-[15px]">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Button>Find Your Van</Button>
        </div>
      </section>
    </>
  );
}
