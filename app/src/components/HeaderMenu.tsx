import clsx from "clsx";
import DarkModeSwitch from "./ThemeMenu";

export default function HeaderMenu() {
  const navCn = clsx(
    "fixed flex max-md:flex-col lg:items-center w-full backdrop-blur h-12 z-[300]",
    "left-0 top-0 border-b p-2"
  );

  const div = clsx(
    "peer-checked:flex max-md:hidden flex lg:justify-between lg:items-center lg:w-full lg:h-full",
    "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900",
    "fixed top-0 left-0 max-md:flex-col p-2 pt-10 w-screen h-screen"
  );

  return (
    <>
      <nav className={navCn}>
        <input className="sr-only peer" type="checkbox" id="menuToggle" />
        <label
          htmlFor="menuToggle"
          className="lg:hidden material-symbols-outlined text-3xl z-50"
        >
          menu
        </label>
        <div className={div}>
          <div />
          <div className="flex max-md:flex-col lg:justify-between lg:items-center w-full max-w-2xl max-lg:gap-4">
            <a className="max-lg:text-2xl" href="/">
              Home
            </a>
            <ul className="flex list-none gap-4 max-md:flex-col max-lg:text-2xl">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/tech-blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
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
