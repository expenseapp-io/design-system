import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default {
	input: [
		"src/main.ts",
	],
	output: {
		dir: "dist",
		format: "es"
	},
	plugins: [
		commonjs(),
		resolve(),
		typescript(),
		postcss({
			plugins: []
		}),
		copy({
			targets: [
				{
					src: "package.json",
					dest: "dist"
				}
			]
		})
	]
};
