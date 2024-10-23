import clsx from "clsx";
import DarkModeSwitch from "./ThemeMenu";

export default function HeaderMenu() {
  const navCn = clsx(
    "fixed flex justify-between px-20 w-full bg-neutral-100 dark:bg-neutral-900 backdrop-blur h-12 z-[300] items-center",
    "left-0 top-0 border-b border-neutral-300 dark:border-neutral-600"
  );

  return (
    <>
      <nav className={navCn}>
        <div />
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
        </div>
        <DarkModeSwitch />
      </nav>
      <div className="h-12" />
    </>
  );
}
