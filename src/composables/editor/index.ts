import { SelectedType } from '../scriptCentral/index'
import { getSingleFirestoreDocument } from '../firebase/firestore'

type editorDocumentType = {
    Name: string,
    content: Array<{ string, unknown }>,
    createdAt: string,
    user:string
}
export const tabArray = ref([])
export const selectedTab = ref()

export const useEditor = () => {
	const loading = ref(false)
	const ScriptDocument = ref<editorDocumentType>()
	const fetchScriptDocument = async (type: SelectedType, id: string) => {
		loading.value = true
        ScriptDocument.value = await getSingleFirestoreDocument(type, id) as editorDocumentType
        tabArray.value = arrangeArray(ScriptDocument.value.content)
        selectedTab.value = tabArray.value[0]
        loading.value = false
    }

    return { loading, fetchScriptDocument }
}

const arrangeArray = (data) => {
    const firstEl = data[0]
    for (let i = 0; i < data.length; i++) {
        if (data[i].fileName.toLowerCase() === 'readme.md') {
            data[0] = data[i]
            data[i] = firstEl
        }
    }
    return data
}
