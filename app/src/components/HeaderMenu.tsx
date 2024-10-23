import clsx from "clsx";
import DarkModeSwitch from "./ThemeMenu";

export default function HeaderMenu() {
  const navCn = clsx(
    "fixed flex justify-center w-full bg-gray-800/20 backdrop-blur h-12 shadow shadow-gray-500/10 z-[30]",
    "left-0 top-0 transition-colors"
  );

  return (
    <>
      <nav className={navCn}>
        <div className="flex justify-between items-center w-full max-w-2xl">
          <a href="/">Home</a>
          <ul className="flex list-none gap-4">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/tech-blog">Blog</a>
            </li>
          </ul>
          <DarkModeSwitch />
        </div>
      </nav>
      <div className="h-12" />
    </>
  );
}
