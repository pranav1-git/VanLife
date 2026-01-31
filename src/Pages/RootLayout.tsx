import { Outlet} from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";

export default function Default() {
  
  return (
    <>
      <MainNavigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// example of parent loader data can be used by the children
// export function loader(): string {
//   return "well the childrens can also access these things";
// }
