import Type from "../const/types"
import "../../config/fbConfig"
import * as firebase from "firebase"

   export const LOGIN = (email, pass) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((user) => {
                dispatch({ type: Type.logInS, logInUser: user })
            })
            .catch((error) => {
                dispatch({ type: Type.logInE, logInError: error, email: email })
            })
    }
}
export const SIGNUP = (email, pass, status) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((user) => {
                firebase.database().ref().child(`Status/${user.user.uid}`).set({ status: status })
                dispatch({ type: Type.signUpS, signUpUser: user })
            })
            .catch((error) => {
                dispatch({ type: Type.signUpE, signUpError: error })
            })
    }
}
export const error = () => {
    return dispatch => {
        dispatch({ type: Type.remove })
    }
}

export const CURRENTUSER = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref().child(`Status/${user.uid}`).on("value", (snapshot) => {
                    const s = snapshot.val()
                    dispatch({ type: Type.currentUser, currentUser: user, userStatus: s.status })
                })
            } else {
                dispatch({ type: Type.currentUserError })
            }
        });

    }
}

export const LOGOUT = () => {
    return dispatch => {
        firebase.auth().signOut();
        dispatch({type: Type.logOut})
    }
}