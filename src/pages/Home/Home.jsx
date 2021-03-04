import React,{useEffect, useState} from 'react'
import './home.scss'
import DisplayBook from '../../Component/DisplayBook/DisplayBook.jsx'
import AppBar from '../../Component/AppBar/Appbar.jsx'
import { getBookService, getCartBooks, getWishList } from '../../services/BookService'
import Pageinations from './Pageination'

const bookCoverData=require('../../assets/bookCover.json');

console.log(bookCoverData.bookCovers[0].id);

const Home = () => {
    const [bookList, setBookList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [postPerPage,setPostPerPage]=useState(4);
    const [search,setSearch]=useState('');
    const [wishList,setWishList]=useState([]);

    const pageinates=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    const getBooks = () => {
        getBookService().then((response) =>{
            if(response.status === 200){
                setBookList(response.data.result);   
                console.log(response);
            }
        }).catch(()=> {
            console.log("Error while Fetching Books!!!")
        });
    }

    const getCartBook=()=>{
        getCartBooks().then((response) =>{
            if(response.status === 200){
                setCartList(response.data.result);
            }
        }).catch(()=> {
            console.log("Error while Fetching Cart!!!")
        });
    }

    const getWishItem=()=>{

        getWishList().then((response) =>{
            if(response.status === 200){
                setWishList(response.data.result);
                //console.log(bookLists.product_id[0]);
                console.log(response);
            }
        }).catch(()=> {
            console.log("Error while Fetching Cart!!!")
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
        getBooks(),
        getCartBook(),
        getWishItem()
    },[])
    
    const handleSearch=(val)=>{
        setSearch(val);
        console.log(val);
    }

    const [searchData,setsearchData] = React.useState('')
    const handleSelect =(sd)=>{
        setsearchData(sd);
        console.log("pp ",searchData)
     }

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts= bookList.slice(indexOfFirstPost,indexOfLastPost);
    //console.log("pageInIt Records: ",currentPosts)
    return(

        <div  className="homeDiv">

            <AppBar countss={wishList.length}   counts={cartList.length} onSelectSearch={handleSelect} />

            <DisplayBook item={currentPosts} books={books} searchData={searchData} getCartBook={getCartBook}/>

            <Pageinations postPerPage={postPerPage} 
                    totalPosts={books} pageinateNumber={pageinates} />
        </div>
    )
}

export default Home
