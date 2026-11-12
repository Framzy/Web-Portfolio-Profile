import { LANGUAGES_ITEMS } from "../../data/AboutItems.data";

export default function AboutLanguages() {
  return LANGUAGES_ITEMS.map((item) => (
    <div
      key={item.label}
      className="text-white text-sm flex justify-between gap-5 items-center"
    >
      <p className="">{item.label}</p>
      <div className="flex flex-row items-center gap-1">
        <div
          aria-hidden="true"
          className="w-30 h-3 rounded-2xl border border-zinc-400"
        >
          <div
            style={{ width: `${item.percentage}%` }}
            className={`h-full rounded-2xl bg-[#39EEFA]`}
          />
        </div>
        <p className="text-zinc-400 text-xs">{item.percentage}%</p>
      </div>
    </div>
  ));
}
