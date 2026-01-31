import type { Vans } from "./src/Types/types";

export function getTagColor(tag: string): string {
  let tagAndColor = "";
  if (tag === "simple") {
    tagAndColor = "bg-[#e17654]";
  } else if (tag === "rugged") {
    tagAndColor = "bg-[#115e59]";
  } else if (tag === "luxury") {
    tagAndColor = "bg-[#161616]";
  }
  return tagAndColor;
}

export async function templateFetch(url: string): Promise<Vans[]> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.vans;
  } catch (error) {
    console.log("well check your templateFetch function, something went wrong");
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    throw new Response(message, {
      status: 500,
      statusText: message || "Something went wrong at templateFetch() function",
    });
  }
}
