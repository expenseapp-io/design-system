import type { Preview } from "@storybook/react";

import "./reset.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/main.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light-theme",
      dark: "dark-theme",
    },
    defaultTheme: "light",
    parentSelector: "body"
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
  },
};

export default preview;
