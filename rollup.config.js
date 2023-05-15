import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: [
    'src/main.ts',
  ],
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    commonjs(),
    resolve(),
    typescript(),
    postcss({
      plugins: []
    }),
  ]
}