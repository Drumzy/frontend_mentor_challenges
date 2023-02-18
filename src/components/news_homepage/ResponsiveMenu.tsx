import { useState } from "react";
import news_logo from "@images/logo_news.svg";
import menu_open from "@images/icon-menu.svg";
import menu_close from "@images/icon-menu-close.svg";

export function RepsonsiveMenuLink({ label }: { label: string }) {
  return (
    <span className="cursor-pointer text-gray-700 hover:text-yellow-600">
      {label}
    </span>
  );
}
export default function ResponsiveMenu() {
  const [isOpen, setisOpen] = useState<boolean>(false);
  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <img src={news_logo.src} alt="news_page_logo" />
      </div>
      <div className="flex md:hidden">
        {isOpen ? (
          <img
            className={`${isOpen ? "z-10" : ""}`}
            src={menu_close.src}
            onClick={() => setisOpen((o) => !o)}
          ></img>
        ) : (
          <img src={menu_open.src} onClick={() => setisOpen((o) => !o)}></img>
        )}
      </div>
      <div
        className={`${
          isOpen
            ? "flex fixed flex-col bg-white right-0 top-0 w-4/5 h-screen md:h-auto overflow-hidden"
            : "hidden"
        } md:flex`}
      >
        <div className="md:inline-flex gap-6 flex flex-col md:flex-row mt-40 md:mt-0 text-lg md:text-base pl-6 md:pl-0 font-semibold md:font-normal">
          <RepsonsiveMenuLink label="Home" />
          <RepsonsiveMenuLink label="New" />
          <RepsonsiveMenuLink label="Popular" />
          <RepsonsiveMenuLink label="Trending" />
          <RepsonsiveMenuLink label="Categories" />
        </div>
      </div>
    </div>
  );
}
