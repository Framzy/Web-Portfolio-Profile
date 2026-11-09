import { FaArrowUp } from "react-icons/fa";
import { DropdownBackground } from "../components/ui/DropdownBackground";
import { CONNECT_ITEMS } from "../data/ConnectItems.data";

type Props = {
  openConnect: boolean;
};

export default function ConnectDesktop({ openConnect }: Props) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-8 w-md lg:w-lg max-w-lg z-50
        transition-all duration-300 delay-75 ease-in-out transform 
        ${
          openConnect
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }
      `}
    >
      <div
        className={`absolute inset-0 z-0 transition-all duration-300 delay-75 ease-in-out transform 
          ${openConnect ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        <DropdownBackground />
      </div>

      <ul className="relative z-10 grid grid-cols-2 text-sm font-manrope p-6">
        {CONNECT_ITEMS.map((item) => (
          <li key={item.label}>
            <div className="p-3">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium underline underline-offset-2 hover:text-[#39EEFA]
                  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400
                  transition-colors duration-100 delay-75 ease-in-out"
              >
                {item.label}
                <FaArrowUp className="inline-block rotate-45 ml-1" size={12} />
              </a>
              <p className="text-[#929292] text-xs mt-2">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
