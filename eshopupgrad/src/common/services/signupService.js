import Axios from "axios";

export const signNewUserToApp = async (signupDetails) => {
    const url = '/api/auth/signup';
    return await Axios.post(url,signupDetails);
}