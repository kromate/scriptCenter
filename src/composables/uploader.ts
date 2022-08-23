import { useStorage } from '@vueuse/core'
import { Ref } from 'vue'
import { saveToFirestore } from './firebase/firestore'
import { scriptListType, byFolderType } from './fileReader'
const scriptFiles:Ref<scriptListType[]> = useStorage('scriptFiles', [])

export const uploadScript = async () => {
    const sc = await byFolderType()
    for (const file of scriptFiles.value) {
        console.log(sc[file.type][file.name])
        const dataContent = sc[file.type][file.name]
        const data = {
            Name: file.name,
            user: 'default',
            createdAt: new Date().toLocaleString(),
            content: dataContent
        }
       await saveToFirestore(file.type, data, file.id)
  }

   alert('done')
}

export const uploadScriptList = async () => {
  for (const file of scriptFiles.value) {
      await saveToFirestore('scriptList', file, file.id)
  }

   alert('done')
}
