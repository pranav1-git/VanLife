import aboutBG from "../assets/aboutbg.png";
import Button from "../Components/Button";

export default function About() {
  return (
    <>
      <section className="about-page">
        <div className="imageBox h-56">
          <img
            className="object-cover w-full h-full"
            src={aboutBG}
            alt="about page bg"
          />
        </div>
        <div className="bottomBox px-5 py-10">
          <h1 className="font-bold text-3xl text-app-dark-sec mb-7">
            Don't squeeze in a sedan when you could relax in a van.
          </h1>
          <div>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉) <br /> <br /> Our team is full of vanlife enthusiasts who know
              firsthand the magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="exploreBox bg-button-orange-sec p-6 rounded mt-6">
            <h1 className="text-app-dark-sec font-bold text-[22px] mb-5">
              Your Destination is waiting. Your Van is ready.
            </h1>
            <Button className="bg-app-dark-sec! text-white font-semibold px-4 py-2!">
              Explore our vans
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
