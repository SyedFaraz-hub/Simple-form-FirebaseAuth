import {Signup_User, Login_User} from "./InfoTypes"



export const Signup = (email,password) =>{
    return {
        type: Signup_User,
        payload: {
            email: email,
            password: password
        }
    }
}

export const login = (email,password) =>{
    return {
        type: Login_User,
        payload: {
            email: email,
            password: password
        }
    }
}