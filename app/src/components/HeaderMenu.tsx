import clsx from "clsx";
import DarkModeSwitch from "./ThemeMenu";

export default function HeaderMenu() {
  const nav = clsx(
    "fixed flex max-lg:flex-col lg:items-center w-full lg:backdrop-blur h-12 z-[300]",
    "left-0 top-0 border-b max-lg:bg-neutral-100 max-lg:dark:bg-neutral-900"
  );

  const div = clsx(
    "flex justify-between items-center w-full h-full px-10 max-lg:px-4 max-lg:py-2 max-lg:items-start max-lg:dark:bg-neutral-900/80",
    "max-lg:backdrop-blur peer-checked:flex max-lg:w-screen max-lg:min-h-screen max-lg:opacity-0 opacity-100",
    "transition-all ease-in duration-100 max-lg:-translate-x-[100vw] max-lg:peer-checked:translate-x-0 peer-checked:opacity-100"
  );

  return (
    <>
      <nav className={nav}>
        <input className="sr-only peer" type="checkbox" id="menuToggle" />
        <label
          htmlFor="menuToggle"
          className="lg:hidden material-symbols-outlined text-3xl z-50 px-4 py-2 fixed"
        >
          menu
        </label>
        <div className={div}>
          <div />
          <div className="flex max-lg:flex-col lg:justify-between lg:items-center w-full max-w-2xl max-lg:gap-4 max-lg:mt-10">
            <a className="max-lg:text-2xl" href="/">
              Home
            </a>
            <ul className="flex list-none gap-4 max-lg:flex-col max-lg:text-2xl">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/tech-blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 max-lg:gap-8">
            <DarkModeSwitch />
            <a
              href="https://github.com/yutalinux/tech-blog"
              className="w-6 h-6 github-icon block"
            />
          </div>
        </div>
      </nav>
      <div className="h-12" />
    </>
  );
}
