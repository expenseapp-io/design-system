import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import svgr from "@svgr/rollup";

export default {
	input: "src/main.ts",
	output: {
		dir: "dist",
		format: "es"
	},
	plugins: [
		commonjs(),
		resolve(),
		typescript(),
		svgr(),
		postcss({
			extract: true,
			plugins: [
				postcssImport()
			],
		}),
	]
};
