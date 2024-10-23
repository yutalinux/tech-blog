import clsx from "clsx";
import { useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";
export enum Icons {
  System = "monitor",
  Light = "light_mode",
  Dark = "dark_mode",
}

export default function ThemeMenu() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [_themeName, setThemeName] = useState("");
  const [iconName, setIconName] = useState("");
  const [open, setOpen] = useState(false);

  const setClassName = (dark: boolean) => {
    const classList = document.documentElement.classList;
    if (dark) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  };

  const MenuItem = ({
    theme,
    name,
    icon,
  }: {
    theme: Theme;
    name: string;
    icon: Icons;
  }) => {
    return (
      <button
        className="flex items-center gap-2 text-nowrap"
        onMouseDown={() => {
          setTheme(theme);
          setOpen(false);
        }}
      >
        <span className="material-symbols-outlined">{icon}</span>
        {name}
      </button>
    );
  };

  useEffect(() => {
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
          setClassName(isDark);
          setThemeName("システム");
          setIconName(Icons.System);
          break;
        case "light":
          setClassName(false);
          setThemeName("ライトモード");
          setIconName(Icons.Light);
          break;
        case "dark":
          setClassName(true);
          setThemeName("ダークモード");
          setIconName(Icons.Dark);
          break;
      }
    }
  }, [theme]);

  const colors = clsx(
    "bg-neutral-100 dark:bg-neutral-900",
    "text-neutral-900 dark:text-neutral-100",
    "border-neutral-300 dark:border-neutral-600"
  );

  const select = clsx(
    "pl-2 pr-5 py-1 rounded-md border flex gap-2 mb-1",
    colors
  );

  const dialog = clsx(
    "px-2 py-1 rounded-md border absolute w-fit right-0",
    colors
  );

  return (
    <label className="block items-center">
      <button
        className={select}
        onBlur={() => {
          setOpen(false);
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="material-symbols-outlined">{iconName}</span>
        <span className="absolute block material-symbols-outlined right-0 w-6">
          arrow_drop_down
        </span>
      </button>
      <div className="relative">
        <dialog open={open} className={dialog}>
          <div className="flex flex-col gap-2">
            <MenuItem theme="system" name="システム" icon={Icons.System} />
            <MenuItem theme="light" name="ライトモード" icon={Icons.Light} />
            <MenuItem theme="dark" name="ダークモード" icon={Icons.Dark} />
          </div>
        </dialog>
      </div>
    </label>
  );
}
