import { Signup_User, Login_User, User_Data, Token } from "./InfoTypes";

const initialState = {
  signupEmail: "",
  signupPassword: "",
  loginEmail: "",
  loginPassword: "",
  user_details: "",
  status: false,
};

const InfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Signup_User:
      return {
        ...state,
        signupEmail: action.payload.email,
        signupPassword: action.payload.password,
      };
    case Login_User:
      return {
        ...state,
        loginEmail: action.payload.email,
        loginPassword: action.payload.password,
      };
    case User_Data:
      return {
        ...state,
        user_details: action.payload.data,
      };
    case Token:
      return {
        ...state,
        status: action.payload.status,
      };

    default:
      return state;
  }
};

export default InfoReducer;
