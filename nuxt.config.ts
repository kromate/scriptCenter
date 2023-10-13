import { fileURLToPath, URL } from 'node:url'

const prefix = 'monaco-editor/esm/vs'

export default {
	ssr: false,
	head: {
		title: 'ScriptCentral',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
	},
	alias: {
		'@': './src'
	},

	css: ['/src/assets/css/main.css'],
	modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss'],
	components: [
		'@/components',
		{ path: '@/components/core', extensions: ['vue'] }
	],
	ignore: ['.scriptFiles', './src/composables/fileReader.ts'],
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js')
		}
	},
	dir: {
		layouts: './src/layouts',
		pages: './src/pages',
		middleware: './src/middleware'
	},
	vite: {
			define: {
			'process.env.VSCODE_TEXTMATE_DEBUG': 'false',
			'process.test': 'false'

		},
		optimizeDeps: {
			include: [
				'path-browserify',
				'onigasm',
				'typescript',
				'@vue/language-service',
				'monaco-editor-core/esm/vs/editor/editor.worker',
				'@volar/monaco/worker',
				'vue/server-renderer'
			]
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
}
