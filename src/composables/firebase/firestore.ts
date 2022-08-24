import { v4 as uuidv4 } from 'uuid'
import {
	getFirestore,
	doc,
	setDoc,
	deleteDoc,
	getDoc, limit,
	collection,
	getDocs,
  query, where
} from 'firebase/firestore'
import { app } from './init'
import { selected } from '@/composables/scriptCentral/index'
export const db = getFirestore(app)

export const saveToFirestore = async (
	collection: string,
	data: any,
	id: string = uuidv4()
) => {
	await setDoc(doc(db, collection, id), data)
}

export const getSingleFirestoreDocument = async (
	collection: string,
	id: string
) => {
	const singlepageBlockRef = doc(db, collection, id)
	const docSnap = await getDoc(singlepageBlockRef)
	if (docSnap.exists()) {
		return docSnap.data()
	} else {
		return null
	}
}

export const getFirestoreCollection = async (collectionName: string) => {
  const collectionRef = collection(db, collectionName)
  const q = query(collectionRef, limit(50), where('type', '==', selected.value))
  const result = []
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })

  return result
}

export const deleteFirestoreDocument = async (
	collection: string,
	id: string
) => {
	await deleteDoc(doc(db, collection, id))
}
