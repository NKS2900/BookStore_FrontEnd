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

export function addToCart(val) {

    try{
        const response = axios.post(process.env.REACT_APP_BOOK_URL+apiConst.addtocart+val,null,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}

export function getCartBooks() {

    try{
        
        const response = axios.get(process.env.REACT_APP_BOOK_URL+apiConst.getCart,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}

export function removeCartItem(_id) {

    try{
        
        const response = axios.delete(process.env.REACT_APP_BOOK_URL+apiConst.remove+_id,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}

export function updateCartItem(_id,data) {

    try{
        
        const response = axios.put(process.env.REACT_APP_BOOK_URL+apiConst.update+_id,data,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}
