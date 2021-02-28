import React,{useEffect, useState} from 'react'
import cover from '../../assets/letusc.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './displayCart.scss'
import { Button, Card } from 'react-bootstrap';
import {  getCartBooks, removeCartItem } from '../../services/BookService';
import AppBar from '../AppBar/Appbar';
import {Form} from "react-bootstrap";

const bookCoverData=require('../../assets/bookCover.json');

const DisplayCart = () => {
    const [bookLists, setBookLists] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleRemove = (_id) =>{
        removeCartItem(_id).then((response)=>{
            if(response.status === 200){
               
                getCartBook()
                console.log(response);
            }
        })
    }

    const getCartBook=()=>{

        getCartBooks().then((response) =>{
            if(response.status === 200){
                setBookLists(response.data.result);
                console.log(bookLists.product_id[0]);
                console.log(response);
            }
        }).catch(()=> {
            console.log("Error while Fetching Cart!!!")
        });
    }

    useEffect(()=>{
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
        <div className="cartBodyy">
             <AppBar/>
        <div className="mainBody">
          
        <div className="cartmainDiv">
        {/* <div id="pdiv"><h5 id="mycart">My Cart(2)</h5></div> */}
        {bookLists.map((item) => (   
                <div className="cartBody" key={item._id}>
                <div className="bookCoverd"><img  src={item.product_id.bookImage} /></div>
                <div className="childBody">
                    <div ><b>{item.product_id.bookName}</b></div>
                    <div id="bookNameCart">{item.product_id.bookName}</div>
                    <div><b>Rs. {item.product_id.price}</b></div>
                    
                    <div className="button-opn">
                        <div id="plusMinusIcons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                            
                            <input id="plusMinus"  disabled value={item.quantityToBuy}></input>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>
                        <Button id="remov" onClick={()=>handleRemove(item._id)}>Remove</Button>
                    </div>
                </div>
            </div>
             ))}
             <div id="place-btn-div">
             <Button id="placeOrder" onClick={()=>setShowForm(!showForm)}>PLACE ORDER</Button>
            </div>
        </div>
        
    </div>

    {/* ------------------------------------- */}
    <div className="customer-detail">
    {!showForm?<div id="detailsMsg"><p id="pid"><b>Customer Details</b></p></div>:null}
            {showForm?
                <Form className="formCustomer">
                    Customer Details
                    <Form.Group size="lg" controlId="fullnames">
                        <div className="formControl">
                            <Form.Control
                                autoFocus
                                placeholder="Full Name"
                                type="text"
                            />
                            <Form.Group size="lg" controlId="phoness">
                                <Form.Control
                                    autoFocus
                                    placeholder="Phone Number"
                                    type="text"
                                />
                            </Form.Group>
                        </div>
                    </Form.Group>

                    <Form.Group size="lg" controlId="emails">
                        <div className="formControllpin">
                            <Form.Control
                                autoFocus
                                placeholder="Pincode"
                                type="number"
                            />
                            <Form.Group size="lg" controlId="pincodes">
                                <Form.Control
                                    autoFocus
                                    placeholder="Locality"
                                    type="text"
                                />
                            </Form.Group>
                        </div>
                    </Form.Group>
                    <Form.Group size="lg" controlId="address">
                        <div className="formControll">
                            <Form.Control
                                autoFocus
                                placeholder="Address"
                                type="text"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group size="lg" controlId="emails">
                        <div className="formControltown">
                            <Form.Control
                                autoFocus
                                placeholder="City/Town"
                                type="text"
                            />
                            <Form.Group size="lg" controlId="citytown">
                                <Form.Control
                                    autoFocus
                                    placeholder="Landmark"
                                    type="text"
                                />
                            </Form.Group>
                        </div>
                    </Form.Group>

                    <div className="contdiv">
                        <Button id="cont-btn" block size="sm" type="button" >
                            CONTINUE
                    </Button>
                    </div>
                </Form>:null}
            </div>
        {/* ------------------------------------- */}
    </div>
    )
}
   
export default DisplayCart