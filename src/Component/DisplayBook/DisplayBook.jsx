import React,{useEffect, useState} from 'react'
import service from '../../services/BookService.js'
import {Card,Button} from 'react-bootstrap'
import cover from '../../assets/letusc.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './displayBook.scss'

const DisplayBook = (props) => {
    return(
        <div >
            {/* <div><h5>Books</h5></div> */}
            <div className="maindiv">
            {props.item.map((item) => (
                <div className="map-div">
                <Card className="cardContainer">
                    <div className="imageDiv">
                        <img  src={cover} />
                    </div>
                    <div className="cardBody">
                    <div className="bookname"><b>{item.bookName}</b></div>
                    <div className="bookname">{item.author}</div>
                    <div className="bookname"><b>Rs.</b> {item.price}</div>
                    <div className="btn-div">
                        <Button id="addbag-btn" >ADD TO BAG</Button>
                        <Button id="wish-btn" >WISHLIST</Button>
                    </div>
                    </div>
                    {/* <Card.Body>
                        <Card.Title>{item.bookName}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>by {item.author}</Card.Text>
                        <Card.Text>Rs. {item.price}</Card.Text>
                        <div className="btn-div">
                            <Button  variant="primary">ADD TO BAG</Button>
                            <Button id="wish-btn" variant="primary">WISHLIST</Button>
                        </div>
                    </Card.Body>*/}
                </Card>
                </div>
            ))}
            </div>
        </div>
    )
}

export default DisplayBook