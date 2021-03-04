import React,{useEffect, useState} from 'react'
import {Card,Button,OverlayTrigger,Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowDescription from '../DisplayBook/ShowDescription';
import { addToCart, getCartBooks, getWishList, removeWishListItem } from '../../services/BookService';
import AppBar from '../AppBar/Appbar';
import './wishList.scss'
const DisplayWishlist = () => {
    const [showDropDown,setShowDropDown]=useState(true);
    const [open,setOpen]=useState(false);
    const [bookLists, setBookLists] = useState([]);
    const [bookID, setid] = useState('');
    const [cartList, setCartList] = useState([]);

    const handlePopup=()=>{
        setOpen(!open);
    }

    const bookCoverData=require('../../assets/bookCover.json');

    const handleRemoved=(_id)=>{
        removeWishListItem(_id).then((response)=>{
            if(response.status === 200){
                getWishItem()
                console.log(response);
            }
        })
    }
    
    const handleCarts=(val)=>{
        console.log("card called :", val);
        addToCart(val).then((response)=>{
            if(response.status===200){
                setid(val);
                props.getCartBook()
            }
        }).catch(()=> {
            console.log("Error while Fetching Books!!!")
        });
    }

    const getWishItem=()=>{

        getWishList().then((response) =>{
            if(response.status === 200){
                setBookLists(response.data.result);
                //console.log(bookLists.product_id[0]);
                console.log(response);
            }
        }).catch(()=> {
            console.log("Error while Fetching Cart!!!")
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

    useEffect(()=>{
        getWishItem(),
        getCartBook()

    },[])

    for (let i = 0; i < bookLists.length; i++) {
        for (let j = 0; j < bookCoverData.bookCovers.length; j++) {                   
            if (bookLists[i].product_id._id===bookCoverData.bookCovers[j].id) {     
                bookLists[i].product_id.bookImage=bookCoverData.bookCovers[j].bookCover;
                break;
            }
        }
    }

    return(
        <div >
            <AppBar countss={bookLists.length} counts={cartList.length}/>
            {/* <div className="order-summarys">
            <div className="cartmainDivOrder">
            <p id="orderSummary"><b>My Wishlist ({bookLists.length})</b></p>
            {bookLists.map((item) => (   
                <div className="wishBody" key={item._id}>
                <div className="bookCoverd"><img  src={item.product_id.bookImage} /></div>
                <div className="childBodyss">
                    <div id="bookN"><b>{item.product_id.bookName}</b></div>
                    <div id="bookNameCart">{item.product_id.bookName}</div>
                    <div><b>Rs. {item.product_id.price}</b></div>
                </div>
                <div>
                <svg id="removSvg" onClick={()=>handleRemoved(item.product_id._id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </div>
            </div>
             ))}
             </div>
             </div> */}

            <div className="maindiv">
            <div id="bookCount"><h5>Books</h5> ({bookLists.length} items)
           </div>
            <div id="cartdiv">
            {bookLists.map((item) => (   
                <div className="map-div" key={item._id}>
                <Card className="cardContainer" >
                    <div className="imageDiv">
                    <img  src={item.product_id.bookImage} onMouseOver={handlePopup} onMouseOut={handlePopup}/>
                    </div>
                    <div className="discribe">
                    <ShowDescription open={open} desc={item.product_id.description} />
                    </div>
                    <div className="cardBody">
                    <div className="bookname"><b>{item.product_id.bookName}</b></div>
                    <div className="bookname2">{item.product_id.author}</div>
                    <div className="bookname"><b>Rs.</b> {item.product_id.price}</div>
                    <div className="btn-div">
                    {(item._id === bookID) ? <Button type="button"  id="addbag-btns">ADDED TO BAG</Button> : <Button type="button" id="addbag-btn" onClick={() => handleCarts(item._id)}>ADD TO BAG</Button>}
                                    {(item._id != bookID) ? <Button type="button" id="wish-btn" onClick={()=>handleRemoved(item.product_id._id)} >REMOVE</Button> : undefined}
            
                    </div>
                    </div>
                </Card>
                </div>
            ))}</div>

            </div>
        </div>
    )
}

export default DisplayWishlist