import { getTagColor } from "../../utils.ts";

interface VansTypeTagProps {
  tag: string;
}

export default function VansTypeTag({ tag }: VansTypeTagProps) {
  let tagBgColor = getTagColor(tag);
  return (
    <div className={`vantypeBox bg-[${tagBgColor}]`}>
      <span className={``}>{tag}</span>
    </div>
  );
}
