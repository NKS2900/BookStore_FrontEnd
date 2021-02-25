import React,{useEffect, useState} from 'react'
import './home.scss'
import DisplayBook from '../../Component/DisplayBook/DisplayBook.jsx'
import AppBar from '../../Component/AppBar/Appbar.jsx'
import { getBookService } from '../../services/BookService'

const Home = () => {
    const [bookList, setBookList] = useState([]);

    const GetBooks = () => {
        getBookService().then((response) =>{
            if(response.status === 200){
                setBookList(response.data.result);
                console.log(response);
            }
        }).catch(()=> {
            console.log("Error while Fetching Notes!!!")
        });
    }

    useEffect(()=>{
        GetBooks()
    },[])
    return(
        <div  >
            <AppBar/>
           <DisplayBook item={bookList} />
        </div>
    )
}

export default Home
