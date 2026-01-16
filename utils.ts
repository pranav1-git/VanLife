export function getTagColor(tag: string): string {
  let tagAndColor = "";
  if (tag === "simple") {
    tagAndColor = "#e17654";
  } else if (tag === "rugged") {
    tagAndColor = "#115e59";
  } else if (tag === "luxury") {
    tagAndColor = "#161616";
  }
  return tagAndColor;
}
