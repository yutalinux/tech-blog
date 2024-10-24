import { withThemeByClassName } from "@storybook/addon-themes";
import "@repo/styles";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
