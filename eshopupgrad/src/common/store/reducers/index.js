import homeReducer from "./homeReducer";
import {combineReducers} from "redux";

export default combineReducers({
    users : homeReducer,

})