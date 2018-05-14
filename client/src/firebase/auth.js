import auth from './firebase'

// Sign Up
export const doCreateUserWithEmailAndPassword = function(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
}

// Sign In
export const doSignInWithEmailAndPassword = function(email, password) {
    auth.signInWithEmailAndPassword(email, password)
}

// Sign out
export const doSignOut = function() {
    auth.signOut()
}