import { v4 as uuidv4 } from 'uuid'
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  getDoc
} from 'firebase/firestore'
import { app } from './init'

export const db = getFirestore(app)

export const saveToFirestore = async (collection:string, data:any, id:string = uuidv4()) => {
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

export const deleteFirestoreDocument = async (collection:string, id:string) => {
  await deleteDoc(doc(db, collection, id))
}
