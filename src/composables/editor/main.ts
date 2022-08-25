import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
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

export let ConvertedEditor: monaco.editor.IStandaloneCodeEditor

const editorState = useStorage<Record<string, any>>(
	StorageName.EDITOR_STATE,
	{}
)

let editorObserver: any

export const mountConvertedEditor = (
	container: Ref<HTMLDivElement>,
	emit: any
) => {
	ConvertedEditor = monaco.editor.create(container.value!, {
		language: 'html',
		theme: isDark.value ? 'vs-dark' : 'vs',
		readOnly: true
	})

	editorObserver = useResizeObserver(container, () => {
		ConvertedEditor.layout()
	})

	watch(isDark, (value) => {
		ConvertedEditor.updateOptions({
			theme: value ? 'vs-dark' : 'vs'
		})
	})
}

export const unmountConvertedEditor = () => {
	ConvertedEditor?.dispose()
	editorObserver.stop()
}

export const updateEditor = (value: any) => {
	ConvertedEditor.setValue(value)
}

export const getConvertedValue = () => ConvertedEditor.getValue()!
