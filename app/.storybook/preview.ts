import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/style.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
