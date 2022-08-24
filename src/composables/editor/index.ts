import { SelectedType } from '../scriptCentral/index'
import { getSingleFirestoreDocument } from '../firebase/firestore'

type editorDocumentType = {
    Name: string,
    content: Array<{ string, unknown }>,
    createdAt: string,
    user:string
}
export const tabArray = ref([])
export const useEditor = () => {
	const loading = ref(false)
	const ScriptDocument = ref<editorDocumentType>()
	const fetchScriptDocument = async (type: SelectedType, id: string) => {
		loading.value = true
        ScriptDocument.value = await getSingleFirestoreDocument(type, id) as editorDocumentType
        console.log(ScriptDocument.value)
        tabArray.value = ScriptDocument.value.content
    }

    return { loading, fetchScriptDocument }
}
