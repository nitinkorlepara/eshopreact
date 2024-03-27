import homeReducer from "./homeReducer";
import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import productReducer from "./productReducer";

export default combineReducers({
    users : homeReducer,
    loginStore : loginReducer,
    productStore : productReducer
})