import Type from "../const/types"
const initState = {
    allDonors: [],
    pervData: false,
    vErrorMessage: "",
    vErrorFlag: false,
}

const donorReducer = (state = initState, action) => {
    switch (action.type) {
        case Type.pervData:
            return state = {
                ...state,
                allDonors: action.data,
                pervData: true
            }
        case Type.newDonor:
            return state
        case Type.updateDonor:
            return state;
        case Type.validate :
        return state = {
            ...state,
            vErrorFlag: true,
            vErrorMessage: action.verrMess
        }
        case Type.removeErrorMess:
        return state = {
            ...state,
            vErrorFlag: false,
            vErrorMessage: "",
        }
        default:
            return state;
    }
}
export default donorReducer;