import { SelectedType } from '../scriptCentral/index'
import { getSingleFirestoreDocument } from '../firebase/firestore'
import { updateEditor } from './main'

type fileContent = {
    fileName: string,
    content: string,
}
type editorDocumentType = {
    Name: string,
    content: fileContent[],
    createdAt: string,
    user:string
}
export const tabArray = ref([])
export const selectedTab = ref()
export const title = ref('')
export const ScriptDocument = ref<editorDocumentType>()

export const useEditor = () => {
	const loading = ref(false)

	const fetchScriptDocument = async (type: SelectedType, id: string) => {
		loading.value = true
        ScriptDocument.value = await getSingleFirestoreDocument(type, id) as editorDocumentType
        tabArray.value = arrangeArray(ScriptDocument.value.content)
        selectContentTabObject(tabArray.value[0])
        title.value = ScriptDocument.value.Name
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

export const selectContentTabObject = (data: fileContent) => {
    selectedTab.value = data
    updateEditor(data.content, data.fileName)
}
