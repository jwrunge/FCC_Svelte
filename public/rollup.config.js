import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel'
import postcssPresetEnv from 'postcss-preset-env'
import postcss from 'rollup-plugin-postcss'
import sveltePreprocess from 'svelte-preprocess'
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,

			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/componentBundle.css');
			},

			preprocess: sveltePreprocess({
				postcss: {
					plugins: [
						postcssPresetEnv({
							autoprefixer: { grid: true }
						})
					]
				},
				scss: true
			})
		}),

		babel({
			extensions: [ '.js', '.mjs', '.html', '.svelte' ]
		}),

		postcss({
			preprocessor: (content, id) => new Promise((resolve, reject)=>{
				const result = sass.renderSync({ file: id })
				resolve({ code: result.css.toString() })
			}),
            extensions: [ '.css', '.scss' ],
            extract: true,
            sourceMap: true,
            plugins: [
                autoprefixer(),
                cssnano()
			]
        }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({ browser: true, dedupe: ['svelte'] }),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}