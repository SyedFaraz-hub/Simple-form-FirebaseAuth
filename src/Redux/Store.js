import { configureStore,combineReducers } from '@reduxjs/toolkit'
import InfoReducer from "./info/InfoReducer";


const reducer = combineReducers({
    InfoReducer: InfoReducer
    });


const store = configureStore({reducer})


export default store;