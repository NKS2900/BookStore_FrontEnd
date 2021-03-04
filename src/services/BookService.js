import axios from 'axios'
import apiConst from '../apiConstant/bookApiConstant.js'
//var urll="https://backend-bookstore.herokuapp.com/bookstore_user/verification/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM5YWQxNDUxZmRjZTAwMTU2NmFmNjIiLCJmdWxsTmFtZSI6Ik5rIHNheXlhZCIsImVtYWlsIjoibmlqYW1zYXl5YWQ5NUBnbWFpbC5jb20iLCJpYXQiOjE2MTQzOTI1OTYsImV4cCI6MTYxNDQ3ODk5Nn0.DLwf-Ag6yhUVbwIXwy8p6HSLLRPse7APztt3IqCPPKE"

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

export function updateAddress(data) {

    try{
        
        const response = axios.put(process.env.REACT_APP_BOOK_URL+apiConst.address,data,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}

export function addOrder(order) {

    try{
        
        const response = axios.post(process.env.REACT_APP_BOOK_URL+apiConst.order,order,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}

export function addToWishList(val) {

    try{
        const response = axios.post(process.env.REACT_APP_BOOK_URL+apiConst.wish+val,null,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}

export function getWishList() {

    try{
        
        const response = axios.get(process.env.REACT_APP_BOOK_URL+apiConst.getWish,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}

export function removeWishListItem(_id) {

    try{
        
        const response = axios.delete(process.env.REACT_APP_BOOK_URL+apiConst.removeWish+_id,
            {
                headers: { 'x-access-token': localStorage.getItem('token') },
            });
        return response;
    }
    catch (error){
        return error;
    }
}