import axios from 'axios'
import apiConst from '../apiConstant/userApiConstant.js'

const getBookService = () => {

    try{
        
        const response = axios.get("https://backend-bookstore.herokuapp.com/bookstore_user/get/book");
        return response;
    }
    catch (error){
        return error;
    }
}

export default {getBookService}