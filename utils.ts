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
