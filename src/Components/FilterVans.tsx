import { type PropsWithChildren, type HtmlHTMLAttributes } from "react";
import { Link} from "react-router-dom";

interface EachFilterProps
  extends PropsWithChildren, HtmlHTMLAttributes<HTMLButtonElement> {
  toHash?: string;
  className?: string;
}

function EachFilter({ children, className, ...props }: EachFilterProps) {
  // const arrayOfClases = allSearchParams.map((el) => `!bg-app-for-${el}`);
  let defaultClasses = `rounded inline-block px-5 py-1 cursor-pointer bg-app-medium hover:text-app-medium ${className}`;

  return (
    <li>
      <button className={`${defaultClasses}`} {...props}>
        {children}
      </button>
    </li>
  );
}

interface FilterVansProp {
  param: string[];
  setterFunc: (x: string) => void;
}

export default function FilterVans({ param, setterFunc }: FilterVansProp) {
  return (
    <>
      <ul className="flex items-center gap-5 text-app-light">
        <EachFilter
          onClick={() => setterFunc("simple")}
          className={`hover:bg-app-for-simple ${param.includes("simple") ? "bg-app-for-simple! text-app-medium" : ""}`}
        >
          Simple
        </EachFilter>

        <EachFilter
          onClick={() => setterFunc("luxury")}
          className={`hover:bg-app-for-luxury ${param.includes("luxury") ? "bg-app-for-luxury! text-app-medium" : ""}`}
        >
          Luxury
        </EachFilter>
        <EachFilter
          onClick={() => setterFunc("rugged")}
          className={`hover:bg-app-for-rugged ${param.includes("rugged") ? "bg-app-for-rugged! text-app-medium" : ""}`}
        >
          Rugged
        </EachFilter>
        {param.length > 0 && (
          <li>
            <Link
              to={"."}
              className={"underline bg-inherit hover:text-inherit"}
            >
              Clear Filters
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
