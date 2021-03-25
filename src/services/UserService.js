import axios from 'axios'
import apiConst from '../apiConstant/userApiConstant.js'

export function loginService  (data) {

    try{

        const response = axios.post(process.env.REACT_APP_BASE_URL+apiConst.login,data);
        //const response = axios.post("https://backend-bookstore.herokuapp.com/bookstore_user/login",data);
        console.log(response);
        return response;
    }
    catch (error){
        return error;
    }
}

export function registerService (data) {

    try{

        const response = axios.post(process.env.REACT_APP_BASE_URL+apiConst.signup,data);
        //const response = axios.post("https://backend-bookstore.herokuapp.com/bookstore_user/registration",data);
        
        return response;
    }
    catch (error){
        return error;
    }
}

