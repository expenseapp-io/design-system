import type { StorybookConfig } from "@storybook/react-vite";
import svgr from "vite-plugin-svgr";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-themes",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        svgr({
          include: "**/*.svg",
        }),
      ],
    });
  },
};

export default config;
