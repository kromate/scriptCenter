import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import { watch } from 'vue'
import type { Ref } from 'vue'
import { useResizeObserver, useStorage } from '@vueuse/core'
import { StorageName, useDarkGlobal } from '@/composables/utils'

self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

const isDark = useDarkGlobal()

export let Monacoeditor: monaco.editor.IStandaloneCodeEditor

const editorState = useStorage<Record<string, any>>(
	StorageName.EDITOR_STATE,
	{}
)

let editorObserver: any

export const mountMonacoeditor = (
	container: Ref<HTMLDivElement>
) => {
	Monacoeditor = monaco.editor.create(container.value!, {
		language: 'json',
		theme: isDark.value ? 'vs-dark' : 'vs',
		readOnly: true
	})

	editorObserver = useResizeObserver(container, () => {
		Monacoeditor.layout()
	})

	watch(isDark, (value) => {
		Monacoeditor.updateOptions({
			theme: value ? 'vs-dark' : 'vs'
		})
	})
}

export const unmountMonacoeditor = () => {
	Monacoeditor?.dispose()
	editorObserver.stop()
}

export const updateEditor = (value: any, type: string) => {
	Monacoeditor.setValue(value)
	const model = Monacoeditor.getModel()
	monaco.editor.setModelLanguage(model, getLanguageType(type))

// Monacoeditor.setModelLanguage(getLanguageType(type))
}

export const getConvertedValue = () => Monacoeditor.getValue()!

const getLanguageType = (type:string) => {
	const fileType = type.split('.')[1]
		switch (fileType) {
			case 'md':
				return 'markdown'
			case 'js':
				return 'javascript'
			case 'json':
				return 'json'
			case 'py':
				return 'python'
			default:
				return 'javascript'
		}
}
