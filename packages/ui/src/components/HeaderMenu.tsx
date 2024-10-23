import clsx from "clsx";

export interface Props {}

export default function HeaderMenu() {
  const navCn = clsx(
    "fixed flex justify-center w-full bg-gray-800/50 backdrop-blur h-12 shadow-md shadow-gray-500/20 z-[30]"
  );

  return (
    <>
      <nav className={navCn}>
        <div className="flex justify-between items-center w-96">
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
      </nav>
      <div className="h-12" />
    </>
  );
}
