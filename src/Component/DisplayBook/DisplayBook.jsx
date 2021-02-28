import React,{useEffect, useState} from 'react'
import {Card,Button,OverlayTrigger,Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './displayBook.scss'
import ShowDescription from './ShowDescription';
import { addToCart } from '../../services/BookService';

const DisplayBook = (props) => {
    const [showDropDown,setShowDropDown]=useState(true);
    const [open,setOpen]=useState(false);
    const [showButton,setShowButton]=useState(false);
    
    const handleButton=()=>{
        
    }

    const handlePopup=()=>{
        setOpen(!open);
    }

    const handleCarts=(val)=>{
        console.log("card called :", val);
        addToCart(val).then((response)=>{
            if(response.status===200){
                alert("boo added to cart..."); 
                // setShowButton(true);  
            }
        }).catch(()=> {
            console.log("Error while Fetching Books!!!")
        });
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
                        <Dropdown.Item id="itemss" >Price:Low To High</Dropdown.Item>
                        <Dropdown.Item id="itemss">Price:High To Low</Dropdown.Item>
                    </Dropdown.Menu>:null}
                </Dropdown>    
            </div></div>
            <div id="cartdiv">
            {props.item.map((item) => (   
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
                        <Button id="addbag-btn" onClick={()=>handleCarts(item._id)} >ADD TO BAG</Button>
                        <Button id="wish-btn" >WISHLIST</Button>
                        {/* {showButton?
                        <button id="addedToBag">Added To Bag</button>
                        :null} */}
                    </div>
                    </div>
                </Card>
                </div>
            ))}</div>

            </div>
        </div>
    )
}

export default DisplayBook