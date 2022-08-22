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

let result = [] as any
const pageBlockRef = collection(db, 'pageBlocks')
export const pageTitle = ref('')

export const saveToFirestore = async (collection:string, data:any) => {
    const id = uuidv4()
    await setDoc(doc(db, collection, id), data)
}

// export const editpageBlock = async (pageBlock, id) => {
//   const userId = user.value.uid;
//   await setDoc(doc(db, "pageBlocks", id), { ...pageBlock, userId, id });
// };

export const delpageBlock = async (id) => {
  openLoading('Deleting the pageBlock')
  await deleteDoc(doc(db, 'pageBlocks', id))
  location.reload()
  closeLoading()
}

export const getUserpageBlock = async () => {
  openLoading('Getting your pageBlocks, this shouldn\'t take long 😙')

  const id = user.value.uid
  result = []

  const userpageBlock = query(pageBlockRef, where('userId', '==', id))
  const querySnapshot = await getDocs(userpageBlock)
  querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })

  const unsubscribe = onSnapshot(pageBlockRef, (snapshot) => {
    result = []
    snapshot.docChanges().forEach((change) => {
      result.push(change.doc.data())
    })
  })

  closeLoading()

  return result
}

export const getSinglepageBlock = async (id) => {
  openLoading('Loading up the pageBlock 👽')
  const singlepageBlockRef = doc(db, 'pageBlocks', id)
  const docSnap = await getDoc(singlepageBlockRef)
  closeLoading()
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}
