import { getTagColor } from "../../utils.ts";

interface VansTypeTagProps {
  tag: string;
}

export default function VansTypeTag({ tag }: VansTypeTagProps) {
  let tagBgColor = getTagColor(tag);
  return (
    <div className={`vantypeBox flex items-center`}>
      <span
        className={`${tagBgColor} text-white px-2 py-1 rounded capitalize font-medium text-sm`}
      >
        {tag}
      </span>
    </div>
  );
}
