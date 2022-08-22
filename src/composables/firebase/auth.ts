import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

import { app } from './init'

const auth = getAuth(app)

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     saveUser(user)
//   } else {
//     clearUser()
//   }
// })

const provider = new GoogleAuthProvider()

export const googleAuth = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      return user
    })
    .catch((error) => {
return error
    })
}

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      location.reload()
    })
    .catch((error) => {
      return error
    })
}
