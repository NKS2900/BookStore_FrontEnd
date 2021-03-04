import React,{useEffect, useState} from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import './appbar.scss'
import cart from '../../assets/cart.svg'
import {useHistory} from "react-router-dom"

const AppBar = (props) =>{
    const history = useHistory();
    const [search,setSearch]=useState('');

    const handleCart=()=>{
        history.push("/cart");
    }

    const handleWish=()=>{
        history.push("/wishlist");
    }

    const handleHome=()=>{
        history.push("/home");
    }
    
    const [searchD, setSearchD] = React.useState('')
    const searchDAta = (e) => {
        console.log("e", e.target.value)
        setSearchD(e.target.value)
        props.onSelectSearch(e.target.value)
    }

    return(
        <div className="mainappbar">
            <Navbar className="navbarr"  variant="dark">
            
                <Navbar.Brand id="brand" onClick={handleHome}><svg  id="bookSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg> Bookstore</Navbar.Brand>
                <Form inline>
                    <FormControl onChange={searchDAta} id="serchbox" type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <div>
                <svg id="wishSvg" onClick={handleWish} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg><p id="wishCounts">{props.countss}</p>
                </div>
                <div id="cartsvg">Cart
                <svg onClick={handleCart} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-cart" viewBox="0 0 16 16" >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg><p id="cartCounts">{props.counts}</p>
                </div>
                {/* <img id="cart" src={cart} /> */}
            </Navbar>
        </div>
    )
}
export default AppBar