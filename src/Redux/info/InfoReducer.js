import {Signup_User, Login_User} from "./InfoTypes"

const initialState = {
    signupEmail: "",
    signupPassword: "",
    loginEmail: "",
    loginPassword: "",
}

const InfoReducer = (state = initialState, action) =>{
switch (action.type) {
    case Signup_User: return {
        ...state,
        signupEmail: action.payload.email,
        signupPassword: action.payload.password
    }
    case Login_User: return {
        ...state,
        loginEmail: action.payload.email,
        loginPassword: action.payload.password
    }
        
        

    default: return state
        
}
}

export default InfoReducer;