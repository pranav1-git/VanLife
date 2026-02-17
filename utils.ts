import type { Vans, User } from "./src/Types/types";

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
    console.log(
      "well check your templateFetch function or loader function for this particular route, something went wrong",
    );
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    throw new Response(message, {
      status: 500,
      statusText: message,
    });
  }
}

export async function loginUser(cred: User, method: string) {
  try {
    const response = await fetch("/api/login", {
      method: method,
      body: JSON.stringify(cred),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    throw new Response(message, {
      status: 500,
      statusText: message,
    });
  }
}
