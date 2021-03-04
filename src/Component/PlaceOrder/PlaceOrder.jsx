import React from 'react'
import orderImg from '../../assets/success1.jpg'
import './placeOrder.scss'
import {Table,Button} from 'react-bootstrap'
import {useHistory} from "react-router-dom"
import AppBar from '../AppBar/Appbar'

const PlaceOrder = () =>{
    const history = useHistory();

    const handleContinue=()=>{
        history.push("/home");
    }

    return(
        <div>
            <AppBar/>
            <div className="parentDivOrder">
            <div id="pds"><img id="imgSuccess" src={orderImg}/></div>
            <div id="pds">
                <div id="pds">hurray!!! your order is confirmed</div>
                <div id="pds">the order id is #123456 save  the order id for</div>
                <div id="pds">further communication..</div>
            </div>
            <div id="pds">
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Email us</th>
                            <th>Contact us</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>admin@bookstore.com</td>
                            <td>+91 8574963210</td>
                            <td>42, 14th Main, 15th Cross Sector 4 cmpolex, Banglore 560041</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div id="pds"><Button id="continue-btn" block size="sm" type="button" onClick={()=>handleContinue()} >
                        CONTINUE SHOPPING
                </Button></div>
        </div>
        </div>
    )
}

export default PlaceOrder