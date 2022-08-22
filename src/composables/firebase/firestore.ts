import { v4 as uuidv4 } from 'uuid'
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  onSnapshot
} from 'firebase/firestore'
import { ref } from '@vue/reactivity'
import { app } from './init'

export const db = getFirestore(app)

const result = [] as any
const pageBlockRef = collection(db, 'pageBlocks')
export const pageTitle = ref('')

export const saveToFirestore = async (collection:string, data:any) => {
    const id = uuidv4()
    await setDoc(doc(db, collection, id), data)
}

export const getSingleFirestoreDocument = async (collection:string, id:string) => {
  const singlepageBlockRef = doc(db, collection, id)
  const docSnap = await getDoc(singlepageBlockRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}
