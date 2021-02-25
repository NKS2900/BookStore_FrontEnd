import axios from 'axios'
import apiConst from '../apiConstant/bookApiConstant.js'

export function getBookService() {

    try{
        
        const response = axios.get(process.env.REACT_APP_BOOK_URL+apiConst.getbook);
        return response;
    }
    catch (error){
        return error;
    }
}
