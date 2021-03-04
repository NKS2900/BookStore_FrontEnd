import React,{useEffect, useState} from 'react'
import {Card,Button,Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './displayBook.scss'
import ShowDescription from './ShowDescription';
import { addToCart, addToWishList } from '../../services/BookService';

const DisplayBook = (props) => {
    const [showDropDown,setShowDropDown]=useState(true);
    const [open,setOpen]=useState(false);
    const [showButton,setShowButton]=useState(false);
    const [bookID, setid] = useState('');
    const [showLowToHigh,setShowLowToHigh]=useState(false);
    const [showHighToLow,setShowHighToLow]=useState(false);
    const [showBooks,setShowBooks]=useState(true);
    
    const handlePopup=()=>{
        setOpen(!open);
    }

    const handleCarts=(val)=>{
        console.log("card called :", val);
        addToCart(val).then((response)=>{
            if(response.status===200){
                setid(val);
                props.getCartBook()
                //alert("boo added to cart..."); 
                // setShowButton(true);  
            }
        }).catch(()=> {
            console.log("Error while Fetching Books!!!")
        });
    }

    const handleWishlist=(val)=>{
        console.log("card called :", val);
        addToWishList(val).then((response)=>{
            if(response.status===200){
                //setid(val);
                alert("boo added to wishlist..."); 
                // setShowButton(true);  
            }
        }).catch(()=> {
            console.log("Error while Fetching Books!!!")
        });
    }

    
    const [isLowTOHigh,setisLowTOHigh] = React.useState(false)
    const [isNoteSort,setisNoteSort] = React.useState(false)

    const handleLow=()=>{
        setShowLowToHigh(true)
        //setShowBooks(!showBooks )
        setisNoteSort(true)
    }

    const handleHigh=()=>{
        setShowLowToHigh(false)
        //setShowBooks(!showBooks )
        setisNoteSort(true)
    }

    return(
        <div >
            <div className="maindiv">
            <div id="bookCount"><h5>Books</h5> ({props.books} items)
            <div className="dropdown">
                <Dropdown >
                    <Dropdown.Toggle  id="dropdown-basic" >
                        Sort by relevance
                    </Dropdown.Toggle>
                    {showDropDown?
                    <Dropdown.Menu id="dropdownmenu">
                        <Dropdown.Item id="itemss" onClick={()=>handleLow()}>Price:Low To High</Dropdown.Item>
                        <Dropdown.Item id="itemss" onClick={()=>handleHigh()}>Price:High To Low</Dropdown.Item>
                    </Dropdown.Menu>:null}
                </Dropdown>    
            </div></div>
            
            <div id="cartdiv">

            {(isNoteSort?(showLowToHigh?(props.item.sort((a, b) => a.price > b.price ? 1 : -1)):
            (props.item.sort((a, b) => a.price < b.price ? 1 : -1))):props.item.filter(
        (i) => i.bookName.includes(props.searchData.toString()))).map((item, index) => {

            {/* {props.item.map((item) => */}
             return(   
              // {props.item.sort((a,b)=>a.price>b.price ? 1:-1).map((item)=>(  
            // {props.item.filter(i=>i.bookName === props.search).map((item) => ( 
                <div className="map-div" key={item._id}>
                <Card className="cardContainer" >
                    <div className="imageDiv">
                    <img  src={item.bookImage} onMouseOver={handlePopup} onMouseOut={handlePopup}/>
                    </div>
                    <div className="discribe">
                    <ShowDescription open={open} desc={item.description} />
                    </div>
                    <div className="cardBody">
                    <div className="bookname"><b>{item.bookName}</b></div>
                    <div className="bookname2">{item.author}</div>
                    <div className="bookname"><b>Rs.</b> {item.price}</div>
                    <div className="btn-div">
                
                         {(item._id === bookID) ? <Button type="button"  id="addbag-btns">ADDED TO BAG</Button> : <Button type="button" id="addbag-btn" onClick={() => handleCarts(item._id)}>ADD TO BAG</Button>}
                                            {(item._id != bookID) ? <Button type="button" id="wish-btn" onClick={()=>handleWishlist(item._id)}>WISHLIST</Button> : undefined}
                   
                    </div>
                    </div>
                </Card>
                </div>
            )})}</div>
            </div>
        </div>
    )
}

export default DisplayBook