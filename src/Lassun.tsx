import { useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";

export default function Lassun() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView();
    }
  }, [hash]);
  // here the useSearchParams() react-router hook returns an array of two element which we destructed it. The first element is 'searchParams' --------> which is nothing but the browser's traditional api 'URLSearchParams', its not a new react-router thing.
  //   'setSearchParams' ---> it is nothing but a function that sets the urlParameters similar to like setState function
  const params = searchParams.get("type");
  // console.log(searchParams.getAll("type"));
  // console.log(searchParams.toString());
  // console.log(params);

  function handleSetSearchParams(type: string) {
    setSearchParams((prevSearchParams) => {
      if (!prevSearchParams.has("type", type)) {
        prevSearchParams.set("type", type);
      }
      return prevSearchParams;
    });
  }

  const swCharacters = [
    { name: "Luke Skywalker", type: "Jedi" },
    { name: "Darth Vader", type: "Sith" },
    { name: "Emperor Palpatine", type: "Sith" },
    { name: "Yoda", type: "Jedi" },
  ];
  let STARWARSFILTERDATA = swCharacters;

  if (params) {
    STARWARSFILTERDATA = swCharacters.filter(
      (char) => char.type.toLowerCase() === params,
    );
  }
  return (
    <>
      <div>
        <div>
          <nav>
            {/* <ul className="flex gap-10">
              <li className="px-5 py-1 bg-black text-yellow-300 ">
                <Link className="" to={{ search: "?type=jedi" }}>
                  Jedi
                </Link>
              </li>
              <li className="px-5 py-1 bg-black text-yellow-300 ">
                <Link className="" to={{ search: "?type=sith" }}>
                  Sith
                </Link>
              </li>
              <li className="px-5 py-1 bg-black text-yellow-300 ">
                <Link className="" to={{ pathname: "." }}>
                  clear filters
                </Link>
              </li>
            </ul> */}
            {/* NOTE -------> Always use objects as the input for the setSearchParams setter function  */}
            <div>
              <ul>
                <li>
                  <button
                    onClick={() => handleSetSearchParams("jedi")}
                    className="bg-black text-yellow-300 px-5 py-1"
                  >
                    Jedi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSetSearchParams("sith")}
                    className="bg-black text-yellow-300 px-5 py-1"
                  >
                    Sith
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSearchParams({})}
                    className="bg-black text-yellow-300 px-5 py-1"
                  >
                    Clear Filters
                  </button>
                </li>
              </ul>
            </div>
            <hr />
            <ul>
              <li className="px-5 py-1 ">
                <Link className="text-underline" to={{ hash: "globalWarming" }}>
                  Go to Global Warming
                </Link>
              </li>
              <li className="px-5 py-1 ">
                <Link
                  className="text-underline"
                  to={{ pathname: ".", hash: "#photoSynthesis" }}
                >
                  Go to PhotoSynthesis
                </Link>
              </li>
              <li className="px-5 py-1 ">
                <Link
                  className="text-underline"
                  to={{ pathname: ".", hash: "#carbonDioxide" }}
                >
                  Go to Carbon Dioxide
                </Link>
              </li>
              <li className="px-5 py-1 ">
                <Link className="text-underline" to={{ hash: "pollution" }}>
                  Go to Pollution
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        <div>
          {STARWARSFILTERDATA.map((char) => (
            <div key={char.name}>
              <h3
                style={{
                  color: char.type.toLowerCase() === "jedi" ? "blue" : "red",
                }}
              >
                Name: {char.name}
              </h3>
              <p>Type: {char.type}</p>
              <hr />
            </div>
          ))}
        </div>
        <hr />
        <div className="randomshit1">
          <h1 id="photoSynthesis" className="text-3xl font-semibold">
            Photosynthesis
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illo
            consectetur architecto similique impedit et dolore veritatis ipsum
            pariatur sint atque cum neque accusantium, autem natus itaque
            ratione quibusdam quisquam corporis placeat. Ut doloribus,
            praesentium sunt minus amet maiores quibusdam ex distinctio, iste
            voluptatem nemo a. Libero dicta pariatur neque impedit fuga soluta
            facere quae quod commodi placeat modi, ut nostrum harum cum qui.
            Repudiandae dolor deserunt eos explicabo veniam obcaecati nobis quis
            accusamus amet, est omnis, sint ut temporibus asperiores? Illo
            mollitia impedit animi veniam quos assumenda exercitationem ex
            aliquid sequi praesentium, accusamus commodi sapiente numquam
            distinctio officia ullam nobis atque voluptates! Facere voluptate
            sint dignissimos iure eligendi laborum suscipit eveniet doloremque
            non adipisci. Minima maxime in aliquid architecto, similique omnis.
            Explicabo aut officiis maiores quisquam dolores accusamus temporibus
            corporis unde ratione illo voluptatibus veniam, exercitationem,
            dolorem doloribus itaque voluptatum ea officia, totam omnis id
            facere porro? Veritatis repellendus rem dolorum, exercitationem
            neque incidunt quo labore odit possimus cum fuga voluptate
            perferendis quae expedita eaque temporibus reiciendis iure a vero at
            quod ea rerum? Animi veniam modi ullam! Sequi dolorum vel, omnis eum
            porro, delectus laborum quae nesciunt alias saepe vero quidem, neque
            harum libero suscipit adipisci deserunt totam. Consequuntur
            consequatur est eum. Voluptatibus amet cumque nostrum commodi
            consectetur minus, voluptatum tenetur veniam quibusdam omnis ut
            tempore eligendi vero. Rerum, ratione eligendi. Velit expedita
            corporis omnis, a aliquam corrupti veritatis vitae nulla tempore
            rerum? Explicabo dolores veniam tempore magni soluta, harum quia
            aspernatur corporis maxime nam mollitia dolorum aut aperiam
            reiciendis recusandae sapiente! Libero nulla facere sint assumenda,
            perferendis accusantium vel laudantium. Tempora modi ipsam
            laudantium recusandae consequatur iure, illo in? Illo, pariatur
            molestiae? Voluptatem saepe, ipsa molestias eveniet eligendi nulla
            minima odio, ipsam nam itaque dolores est suscipit explicabo
            necessitatibus autem exercitationem commodi esse, excepturi iusto!
            Doloribus, dicta.
          </p>
        </div>
        <hr />
        <div className="randomshit2">
          <h1 id="carbonDioxide" className="text-3xl font-semibold">
            Carbon Dioxide
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illo
            consectetur architecto similique impedit et dolore veritatis ipsum
            pariatur sint atque cum neque accusantium, autem natus itaque
            ratione quibusdam quisquam corporis placeat. Ut doloribus,
            praesentium sunt minus amet maiores quibusdam ex distinctio, iste
            voluptatem nemo a. Libero dicta pariatur neque impedit fuga soluta
            facere quae quod commodi placeat modi, ut nostrum harum cum qui.
            Repudiandae dolor deserunt eos explicabo veniam obcaecati nobis quis
            accusamus amet, est omnis, sint ut temporibus asperiores? Illo
            mollitia impedit animi veniam quos assumenda exercitationem ex
            aliquid sequi praesentium, accusamus commodi sapiente numquam
            distinctio officia ullam nobis atque voluptates! Facere voluptate
            sint dignissimos iure eligendi laborum suscipit eveniet doloremque
            non adipisci. Minima maxime in aliquid architecto, similique omnis.
            Explicabo aut officiis maiores quisquam dolores accusamus temporibus
            corporis unde ratione illo voluptatibus veniam, exercitationem,
            dolorem doloribus itaque voluptatum ea officia, totam omnis id
            facere porro? Veritatis repellendus rem dolorum, exercitationem
            neque incidunt quo labore odit possimus cum fuga voluptate
            perferendis quae expedita eaque temporibus reiciendis iure a vero at
            quod ea rerum? Animi veniam modi ullam! Sequi dolorum vel, omnis eum
            porro, delectus laborum quae nesciunt alias saepe vero quidem, neque
            harum libero suscipit adipisci deserunt totam. Consequuntur
            consequatur est eum. Voluptatibus amet cumque nostrum commodi
            consectetur minus, voluptatum tenetur veniam quibusdam omnis ut
            tempore eligendi vero. Rerum, ratione eligendi. Velit expedita
            corporis omnis, a aliquam corrupti veritatis vitae nulla tempore
            rerum? Explicabo dolores veniam tempore magni soluta, harum quia
            aspernatur corporis maxime nam mollitia dolorum aut aperiam
            reiciendis recusandae sapiente! Libero nulla facere sint assumenda,
            perferendis accusantium vel laudantium. Tempora modi ipsam
            laudantium recusandae consequatur iure, illo in? Illo, pariatur
            molestiae? Voluptatem saepe, ipsa molestias eveniet eligendi nulla
            minima odio, ipsam nam itaque dolores est suscipit explicabo
            necessitatibus autem exercitationem commodi esse, excepturi iusto!
            Doloribus, dicta.
          </p>
        </div>
        <hr />
        <div className="randomshit3">
          <h1 id="globalWarming" className="text-3xl font-semibold">
            Global Warming
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illo
            consectetur architecto similique impedit et dolore veritatis ipsum
            pariatur sint atque cum neque accusantium, autem natus itaque
            ratione quibusdam quisquam corporis placeat. Ut doloribus,
            praesentium sunt minus amet maiores quibusdam ex distinctio, iste
            voluptatem nemo a. Libero dicta pariatur neque impedit fuga soluta
            facere quae quod commodi placeat modi, ut nostrum harum cum qui.
            Repudiandae dolor deserunt eos explicabo veniam obcaecati nobis quis
            accusamus amet, est omnis, sint ut temporibus asperiores? Illo
            mollitia impedit animi veniam quos assumenda exercitationem ex
            aliquid sequi praesentium, accusamus commodi sapiente numquam
            distinctio officia ullam nobis atque voluptates! Facere voluptate
            sint dignissimos iure eligendi laborum suscipit eveniet doloremque
            non adipisci. Minima maxime in aliquid architecto, similique omnis.
            Explicabo aut officiis maiores quisquam dolores accusamus temporibus
            corporis unde ratione illo voluptatibus veniam, exercitationem,
            dolorem doloribus itaque voluptatum ea officia, totam omnis id
            facere porro? Veritatis repellendus rem dolorum, exercitationem
            neque incidunt quo labore odit possimus cum fuga voluptate
            perferendis quae expedita eaque temporibus reiciendis iure a vero at
            quod ea rerum? Animi veniam modi ullam! Sequi dolorum vel, omnis eum
            porro, delectus laborum quae nesciunt alias saepe vero quidem, neque
            harum libero suscipit adipisci deserunt totam. Consequuntur
            consequatur est eum. Voluptatibus amet cumque nostrum commodi
            consectetur minus, voluptatum tenetur veniam quibusdam omnis ut
            tempore eligendi vero. Rerum, ratione eligendi. Velit expedita
            corporis omnis, a aliquam corrupti veritatis vitae nulla tempore
            rerum? Explicabo dolores veniam tempore magni soluta, harum quia
            aspernatur corporis maxime nam mollitia dolorum aut aperiam
            reiciendis recusandae sapiente! Libero nulla facere sint assumenda,
            perferendis accusantium vel laudantium. Tempora modi ipsam
            laudantium recusandae consequatur iure, illo in? Illo, pariatur
            molestiae? Voluptatem saepe, ipsa molestias eveniet eligendi nulla
            minima odio, ipsam nam itaque dolores est suscipit explicabo
            necessitatibus autem exercitationem commodi esse, excepturi iusto!
            Doloribus, dicta.
          </p>
        </div>
        <hr />
        <div className="randomshit4">
          <h1 id="pollution" className="text-3xl font-semibold">
            Pollution
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illo
            consectetur architecto similique impedit et dolore veritatis ipsum
            pariatur sint atque cum neque accusantium, autem natus itaque
            ratione quibusdam quisquam corporis placeat. Ut doloribus,
            praesentium sunt minus amet maiores quibusdam ex distinctio, iste
            voluptatem nemo a. Libero dicta pariatur neque impedit fuga soluta
            facere quae quod commodi placeat modi, ut nostrum harum cum qui.
            Repudiandae dolor deserunt eos explicabo veniam obcaecati nobis quis
            accusamus amet, est omnis, sint ut temporibus asperiores? Illo
            mollitia impedit animi veniam quos assumenda exercitationem ex
            aliquid sequi praesentium, accusamus commodi sapiente numquam
            distinctio officia ullam nobis atque voluptates! Facere voluptate
            sint dignissimos iure eligendi laborum suscipit eveniet doloremque
            non adipisci. Minima maxime in aliquid architecto, similique omnis.
            Explicabo aut officiis maiores quisquam dolores accusamus temporibus
            corporis unde ratione illo voluptatibus veniam, exercitationem,
            dolorem doloribus itaque voluptatum ea officia, totam omnis id
            facere porro? Veritatis repellendus rem dolorum, exercitationem
            neque incidunt quo labore odit possimus cum fuga voluptate
            perferendis quae expedita eaque temporibus reiciendis iure a vero at
            quod ea rerum? Animi veniam modi ullam! Sequi dolorum vel, omnis eum
            porro, delectus laborum quae nesciunt alias saepe vero quidem, neque
            harum libero suscipit adipisci deserunt totam. Consequuntur
            consequatur est eum. Voluptatibus amet cumque nostrum commodi
            consectetur minus, voluptatum tenetur veniam quibusdam omnis ut
            tempore eligendi vero. Rerum, ratione eligendi. Velit expedita
            corporis omnis, a aliquam corrupti veritatis vitae nulla tempore
            rerum? Explicabo dolores veniam tempore magni soluta, harum quia
            aspernatur corporis maxime nam mollitia dolorum aut aperiam
            reiciendis recusandae sapiente! Libero nulla facere sint assumenda,
            perferendis accusantium vel laudantium. Tempora modi ipsam
            laudantium recusandae consequatur iure, illo in? Illo, pariatur
            molestiae? Voluptatem saepe, ipsa molestias eveniet eligendi nulla
            minima odio, ipsam nam itaque dolores est suscipit explicabo
            necessitatibus autem exercitationem commodi esse, excepturi iusto!
            Doloribus, dicta.
          </p>
        </div>
      </div>
    </>
  );
}
