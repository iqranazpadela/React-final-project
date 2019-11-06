import {combineReducers} from "redux"
import donorReducer from "./donorReducer" 
import SignInReducer from "./SignInReducer";
import SignUpReducer from "./SignUpReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
donor: donorReducer,
signIn: SignInReducer,
signUp: SignUpReducer,
auth: authReducer,
})

export default rootReducer;