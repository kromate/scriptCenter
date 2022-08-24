import { Ref } from 'vue'
import { getFirestoreCollection } from '../firebase/firestore'
type SelectedType = 'BASH' | 'Golang' | 'JavaScript' | 'PowerShell' | 'Python' | 'Rust'

export const useScriptList = () => {
	const loading = ref(false)
	const scriptList = ref([])

    const fetchScripts = async () => {
        loading.value = true
        scriptList.value = await getFirestoreCollection('scriptList')
        console.log(scriptList.value.length)
        loading.value = false
	}

	return { loading, fetchScripts, scriptList }
}

export const useSelectMenu = () => {
    const selectTypes = ['BASH', 'Golang', 'JavaScript', 'PowerShell', 'Python', 'Rust']
    const selected:Ref<SelectedType> = ref('JavaScript')
}
