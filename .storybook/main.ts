import type { StorybookConfig } from "@storybook/react-vite";
import svgr from "vite-plugin-svgr";
import {mergeConfig} from "vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			plugins: [svgr()]
		});
	},
};

export default config;
