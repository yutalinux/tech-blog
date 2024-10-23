import clsx from "clsx";
import { useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";

export default function ThemeMenu() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (theme === null) {
      const sessionTheme = sessionStorage.getItem("theme");
      switch (sessionTheme) {
        case "light":
        case "dark":
        case "system":
          setTheme(sessionTheme);
          return;
        default:
          setTheme("system");
          return;
      }
    } else {
      sessionStorage.setItem("theme", theme);
      switch (theme) {
        case "system":
          const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
          if (isDark) {
            classList.add("dark");
          } else {
            classList.remove("dark");
          }
          break;
        case "light":
          classList.remove("dark");
          break;
        case "dark":
          classList.add("dark");
          break;
      }
    }
  }, [theme]);

  const select = clsx(
    "pl-2 pr-6 py-1 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 appearance-none"
  );

  return (
    <label className="relative inline-flex items-center ju">
      <select
        className={select}
        value={theme || "system"}
        onChange={(e) => {
          setTheme(e.target.value as Theme);
        }}
      >
        <option value="system">システム</option>
        <option value="light">ライトモード</option>
        <option value="dark">ダークモード</option>
      </select>
      <span className="absolute material-symbols-outlined right-0">
        arrow_drop_down
      </span>
    </label>
  );
}
