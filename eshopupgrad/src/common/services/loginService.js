import Axios from 'axios';

export const loginToApp = async (email,password) => {
    const url = '/api/auth/signin';
    return await Axios.post(url, {
        "password": password,
        "username": email
      });
};


export const createSession =  (loginDetails) => {
  console.log(loginDetails);
  sessionStorage.setItem("loginData", JSON.stringify(loginDetails.response.data));
  sessionStorage.setItem("loginToken", loginDetails.response.headers['x-auth-token']);
}