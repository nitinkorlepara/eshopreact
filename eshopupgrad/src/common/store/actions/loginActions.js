import { loginToApp } from "../../services/loginService"

export const addLoginDetails = (email,password) => dispatch => {
    loginToApp(email,password).then((response)=>{
        console.log(response)
        dispatch({
            type : "SET_LOGIN_FIELDS",
            responseLogin : response,
            requestMade : true
       }) 
    }).catch((response)=>{
        dispatch({
            type : "SET_LOGIN_FIELDS",
            responseLogin : response,
            requestMade : true
       }) 
    })
};

export const checkLoginSessionIsActive = () => {
    return {
        type : "CHECK_SESSION_ACTIVE"
    };
};

export const logoutSession = () => {
    return {
        type : "LOGOUT_SESSION"
    }
}
