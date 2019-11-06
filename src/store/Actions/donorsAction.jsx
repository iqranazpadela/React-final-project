import Type from "../const/types"
import "../../config/fbConfig"
import * as firebase from "firebase"

export const addNewDonor = (newDonor) => {
    return dispatch => {
        firebase.database().ref().child("Donors").push(newDonor)
        dispatch({ type: Type.newDonor, newDonor })
    }
}

export const UpdateCurrentDonor = (data,editID) => {
    return (dispatch) => {
        firebase.database().ref().child(`Donors/${editID}`).update(data)
        dispatch({type: Type.updateDonor})
    }
}

export const PervData = () => {
    return (dispatch) => {
        firebase.database().ref().child("Donors").on("value", (snapshot) => {
            const data = snapshot.val()
            const TemArr = []
            for (let key in data) {
                TemArr.push({
                    id: key,
                    userId: data[key].userId,
                    firstName: data[key].firstName,
                    lastName: data[key].lastName,
                    age: data[key].age,
                    phoneNumber: data[key].phoneNumber,
                    gender: data[key].gender,
                    group: data[key].group,
                    address: data[key].address,
                    email: data[key].email,
                    city: data[key].city,
                    country: data[key].country,
                    avail: data[key].avail
                })
            }
            dispatch({ type: Type.pervData, data: TemArr })
        })

    }
}

export const Validation = (message) => {
return {type: Type.validate, verrMess: message}
}

export const RemoveErrorMessages = () => {
    return dispatch => {
        dispatch({ type: Type.removeErrorMess })
    }
}