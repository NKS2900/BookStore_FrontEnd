import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import service from '../../services/UserService.js'
import {useHistory} from "react-router-dom"
import './signup.scss'

const Signup = () => {
    const history = useHistory();
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [nameerror, setNameerror] = useState(false);
    const [passerror, setPasserror] = useState(false);
    const [emailError, setEmailerror] = useState(false);
    const [phoneerror, setPhoneError] = useState(false);
    console.log(fullName);

    const handleLoginlink=()=>{
        history.push("/login");
      }

      const validation= () =>{
        let invalidForm=true;
      if(!fullName.match(/^[A-Z]{1}[a-zA-Z]{2,}[ ]{1}[A-Z]{1}[a-zA-Z]{2,}$/))
      {
        setNameerror('true');
        invalidForm=false;
      }
  
      if(!email.match(/^[a-zA-Z0-9.]{1,}@[a-z]{1,5}[.a-z]{1,5}[.]{1}[a-z]{1,4}$/))
      {
        setEmailerror('true');
        invalidForm=false;
      }
 
      if(!phone.match(/^[7-9]{1}[0-9]{9}$/))
      {
        setPhoneError('true');
        invalidForm=false;
      }

      if(!password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*.-])[a-zA-Z0-9].{8,}$/))
        {
            setPasserror('true');
            invalidForm=false;
        }
        return invalidForm;
    }

  // ----------------------------------------------//

    const handleSignup = () => {
        let signupData = {
            fullName,
            email,
            password,
            phone
        }
        if (validation()) {
            service.Register(signupData).then((response) => {
                if (response.status === 200) {
                    alert("signup Successfull");
                }
                else {
                    alert("Registration Faield..");
                }
            }).catch((err) => {
                alert("Error !!!");
                console.log("this is exception: ", err);
            })
        }
    }

    return (
        <div className="container">
            <Form className="formSignup">
            <h3>BookStore App</h3>
            <h4>Signup</h4>
                    <div className="fullnameDiv">
                    <Form.Group size="lg" controlId="fullname">
                    <Form.Label className="fullLabel">Full Name</Form.Label>
                    <div className="formControll">
                    <Form.Control
                        autoFocus
                        placeholder="Full Name"
                        type="text"
                        value={fullName}
                        isInvalid={!!nameerror}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid FullName.
                    </Form.Control.Feedback>
                    </div>
                    </Form.Group>
                    
                    </div>
                    <div className="emailDiv">
                    <Form.Group size="lg" controlId="email">
                    <Form.Label className="emailLabel">Email</Form.Label>
                    <div className="formControll">
                    <Form.Control
                        autoFocus
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        isInvalid={!!emailError}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                    </div>
                    </Form.Group>
                    </div>
                    <div className="phoneDiv">
                    <Form.Group size="lg" controlId="phone">
                    <Form.Label className="phoneLabel">Phone Number</Form.Label>
                    <div className="formControll">
                    <Form.Control
                        autoFocus
                        placeholder="Phone Number"
                        type="number"
                        value={phone}
                        isInvalid={!!phoneerror}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Phone.
                    </Form.Control.Feedback>
                    </div>
                    </Form.Group>
                    </div>
                    <div className="passDiv">
                    <Form.Group size="lg" controlId="password">
                    <Form.Label className="passwordLabel">Password</Form.Label>
                    <div className="formControll">
                    <Form.Control
                        autoFocus
                        placeholder="Password"
                        type="password"
                        value={password}
                        isInvalid={!!passerror}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Password.
                    </Form.Control.Feedback>
                    </div>
                    </Form.Group>
                    </div>
                    <div className="submitDiv">
                    <Button id="signup-btn" block size="lg" type="button" onClick={handleSignup}>
                        Signup
                    </Button>
                    </div>
                    <label id="signmsg">Have an account with us <a id="loglink" onClick={handleLoginlink}> Login</a></label>
                </Form>
        </div>
    )
}

export default Signup;

