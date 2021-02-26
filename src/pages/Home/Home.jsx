import React,{useEffect, useState} from 'react'
import './home.scss'
import DisplayBook from '../../Component/DisplayBook/DisplayBook.jsx'
import AppBar from '../../Component/AppBar/Appbar.jsx'
import { getBookService } from '../../services/BookService'

const bookCoverData=require('../../assets/bookCover.json');

console.log(bookCoverData.bookCovers[0].id);

const Home = () => {
    const [bookList, setBookList] = useState([]);

    const getBooks = () => {
        getBookService().then((response) =>{
            if(response.status === 200){
                setBookList(response.data.result);
               // console.log(response.data.result[0]._id);
                console.log(response);
            }
        }).catch(()=> {
            console.log("Error while Fetching Notes!!!")
        });
    }
    var books=bookList.length;

    for (let i = 0; i < bookList.length; i++) {   
        for (let j = 0; j < bookCoverData.bookCovers.length; j++) {                   
            if (bookList[i]._id===bookCoverData.bookCovers[j].id) {         
                bookList[i].bookImage=bookCoverData.bookCovers[j].bookCover;
                break;
            }
        }
    }

    useEffect(()=>{
        getBooks()
    },[])
    
    return(
        <div  className="homeDiv">
            <AppBar/>
            <DisplayBook item={bookList} books={books} GetBook={getBooks}/>
        </div>
    )
}

export default Home
