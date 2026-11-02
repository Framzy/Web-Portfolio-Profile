import type { SkillItem } from "../types";

type SkillCardProps = SkillItem & {
  index: number;
};

export default function SkillCard({ index, label, span, items }: SkillCardProps) {
  const spanClass = span === 2 ? "col-span-2 " : "col-span-2 md:col-span-1 ";

  return (
    <div
      className={`${spanClass} flex flex-col gap-2 border border-[#898989] rounded-xl px-5 py-3 bg-radial from-[rgba(110,110,110,0.35)] to-[rgba(41,41,41,0.2)]`}
    >
      <p>
        [0{index + 1}] {label}
      </p>

      <div className="flex flex-row flex-wrap gap-2">
        {items.map((item) => (
          <p key={item} className="bg-[#353438] rounded-md py-2 px-5">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
