import {Signup_User, Login_User, User_Data, Token} from "./InfoTypes"



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

export const User_info = (user_details) =>{
    return {
        type: User_Data,
        payload: {
            data: user_details
        }
    }
}

export const setToken = (status) =>{
    return {
        type: Token,
        payload: {
            status: status
        }
    }
}