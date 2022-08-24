import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { getFirestoreCollection } from '../firebase/firestore'

let fetchScripts

export type SelectedType =
	| 'BASH'
	| 'Golang'
	| 'JavaScript'
	| 'PowerShell'
	| 'Python'
	| 'Rust';

export const selectTypes = [
	'BASH',
	'Golang',
	'JavaScript',
	'PowerShell',
	'Python',
	'Rust'
]
export const selected: Ref<SelectedType> = useStorage<SelectedType>(
	'selected',
	'JavaScript'
)

watch(selected, (value) => {
    selected.value = value
    fetchScripts()
})

export const useScriptList = () => {
	const loading = ref(false)
	const scriptList = ref([])

	 fetchScripts = async () => {
		loading.value = true
		scriptList.value = await getFirestoreCollection('scriptList')
		console.log(scriptList.value.length)
		loading.value = false
	}

	return { loading, fetchScripts, scriptList }
}
