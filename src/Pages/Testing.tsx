import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

export default function Testing() {
  const { earlyData, dataThatTakesTime } = useLoaderData();
  // PUT A PROMISE INSIDE THE resolve={} prop of the Await Component.
  return (
    <>
      <h1>Early data is : {earlyData}</h1>
      <Suspense fallback={<h1>please wait...........</h1>}>
        <Await
          resolve={dataThatTakesTime}
          children={(resolvedDataThatTakeTime) => {
            console.log(resolvedDataThatTakeTime);
            return <h1>{resolvedDataThatTakeTime.joke}</h1>;
          }}
        />
      </Suspense>
    </>
  );
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function loader() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });

  //   await sleep(3000);
  const secValue = "THM__{BOYS_WILL_BE_BOYS}";
  return { earlyData: secValue, dataThatTakesTime: response.json() };
}
