import type { Section } from "../../types/sections";
import type { Props } from "../../types/propsNavigate";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import DownloadCvButton from "../ui/DownloadCvButton";
import ConnectSection from "../../features/connect/ConnectSection";
import { CVData } from "../../data/CV.data";

const NAV_ITEMS: { label: string; section: Section }[] = [
  { label: "ABOUT", section: "about" },
  { label: "SKILLS", section: "skill" },
  { label: "PROJECTS", section: "project" },
];

export default function Navbar({ onNavigate }: Props) {
  const [open, setOpen] = useState(false); // mobile hamburger menu
  const [openConnect, setOpenConnect] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenConnect(false);
      }
    }

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, openConnect]);

  useEffect(() => {
    document.body.style.overflow = open || openConnect ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, openConnect]);

  const closeMobileMenu = () => {
    setOpen(false);
    setOpenConnect(false);
  };

  const handleNavigate = (section: Section) => {
    onNavigate(section);
    closeMobileMenu();
  };

  const toggleMenu = () => {
    setOpen((v) => !v);
    setOpenConnect(false);
  };

  const toggleConnect = () => {
    setOpenConnect((v) => !v);
  };

  return (
    <nav className="bg-[#0A090F] border-b border-[#8A8A8A] relative z-50">
      <div className="max-w-5/6 md:max-w-4/5 mx-auto h-16 flex items-center justify-between gap-4">
        <div className="flex items-center md:w-50 lg:w-57 ">
          <h1 className=" text-white font-bold font-vollkorn">FRAMZY.</h1>
        </div>

        <ul className="hidden md:flex items-center gap-7 xl:gap-12 text-white font-manrope text-sm ">
          {NAV_ITEMS.map((item) => (
            <li key={item.section}>
              <button
                type="button"
                className="navbar-navItem transition-colors duration-100 delay-75 ease-in-out
                          focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                onClick={() => handleNavigate(item.section)}
              >
                {item.label}
              </button>
            </li>
          ))}

          <li className="relative">
            <button
              type="button"
              onClick={toggleConnect}
              className={`focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400
                transition-colors duration-100 delay-75 ease-in-out 
                navbar-navItem flex items-center ${
                  openConnect ? "text-[#39EEFA]" : ""
                }`}
            >
              CONNECT
              <RxCaretDown
                size={16}
                className={`ml-2 transition-transform delay-75 duration-200 ${
                  openConnect ? "rotate-180" : ""
                }`}
              />
            </button>
            <ConnectSection view="desktop" openConnect={openConnect} />
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <div
            className={` transition-opacity duration-200 delay-75 ease-in-out
             ${open ? "opacity-0 scale-0" : " opacity-100 scale-100"} `}
          >
            <DownloadCvButton cvFile={CVData} />
          </div>

          <button
            type="button"
            ref={btnRef}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => toggleMenu()}
            className="md:hidden p-2 text-white cursor-pointer transition-colors duration-100 delay-75 ease-in-out hover:text-[#39EEFA]"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed inset-x-4 top-16 z-40 transition-all transform duration-200 delay-75 ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="bg-[#0A090F] border border-[#2B2B2B] rounded-lg mt-2 py-6 px-5">
          <ul className="flex flex-col gap-4 text-white text-sm font-manrope">
            {NAV_ITEMS.map((item) => (
              <li key={item.section}>
                <button
                  type="button"
                  className="navbar-navItem w-full text-left"
                  onClick={() => handleNavigate(item.section)}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* CONNECT – MOBILE */}
            <li>
              <button
                type="button"
                onClick={toggleConnect}
                className={`navbar-navItem w-full text-left flex justify-between items-center ${
                  openConnect ? "text-[#39EEFA]" : ""
                }`}
              >
                CONNECT
                <RxCaretDown
                  size={16}
                  className={`ml-2 transition-transform delay-75 duration-200 ${
                    openConnect ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ConnectSection view="mobile" openConnect={openConnect} />
            </li>

            <li className="pt-2">
              <DownloadCvButton cvFile={CVData} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
