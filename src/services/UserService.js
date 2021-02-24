import axios from 'axios'
import apiConst from '../apiConstant/userApiConstant.js'
let LoginService = (data) => {

    try{
        console.log(data);
        //const response = axios.post(process.env.REACT_APP_BASE_URL+apiConst.login,loginData);
        const response = axios.post("https://backend-bookstore.herokuapp.com/bookstore_user/login",data);
        console.log(response);
        return response;
    }
    catch (error){
        return error;
    }
}

let Register = (data) => {

    try{
        console.log("service: ",data);
        
        //const response = axios.post(process.env.REACT_APP_BASE_URL+apiConst.signup,loginData);
        const response = axios.post("https://backend-bookstore.herokuapp.com/bookstore_user/registration",data);
        console.log(response);
        
        return response;
    }
    catch (error){
        return error;
    }
}

export default {LoginService, Register}