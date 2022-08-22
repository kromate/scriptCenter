import { useStorage } from '@vueuse/core'
import { Ref } from 'vue'
import { saveToFirestore } from './firebase/firestore'
import { scriptListType } from './fileReader'
const scriptFiles:Ref<scriptListType[]> = useStorage('scriptFiles', [])

export const uploadScript = async () => {
  for (const file of scriptFiles.value) {
      await saveToFirestore('scriptList', file, file.id)
  }

   alert('done')
}
