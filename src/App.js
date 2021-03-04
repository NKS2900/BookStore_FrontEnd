import React from 'react'; 
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Signup from '../src/pages/Signup/Signup.jsx'
import Login from '../src/pages/Login/Login.jsx'
import Home from '../src/pages/Home/Home.jsx'
import DisplayCart from '../src/Component/Cart/DisplayCart.jsx'
import DisplayWishlist from '../src/Component/WishList/DisplayWishlist.jsx'
import PlaceOrder from '../src/Component/PlaceOrder/PlaceOrder.jsx'
function App() {
    return (
      <div className="App">
          <Router>
            <Switch>
                <Route path="/login" component={ Login }/>
                <Route path="/signup" component={ Signup }/>
                <Route path="/home" component={ Home } />
                <Route path="/cart" component={ DisplayCart } />
                <Route path="/wishlist" component={ DisplayWishlist } />
                <Route path="/order" component={ PlaceOrder } />
            </Switch>
          </Router>
      </div>
    );
  }
  
  export default App;
