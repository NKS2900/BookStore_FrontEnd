import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FormControl,HelpBlock} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from "react-router-dom"
import './login.scss'
import { loginService } from '../../services/UserService';
var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNiODBkMjkwNzkzMDAwMTUzZGZmN2EiLCJmdWxsTmFtZSI6Ik5rc2F5eWFkIiwiZW1haWwiOiJua3NheXlhZDI5MDBAZ21haWwuY29tIiwiaWF0IjoxNjE0NTEyMzM5LCJleHAiOjE2MTQ1OTg3Mzl9.DCzv1bM6G2tWr0PR6jIUVjmqnEjNrHEBtNh6YG_qQxw"
export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState(false);
    const [passerror, setPasserrors] = useState(false);
    const history = useHistory();
    const [showAlert,setShowAlert]=useState(false);

    console.log(email)
    const validation=()=>{

        let invalidForm=true;
  
        if(!email.match(/^[a-zA-Z0-9.]{1,}@[a-z]{1,5}[.a-z]{1,5}[.]{1}[a-z]{1,4}$/))
        {
            console.log("Invalid email!!!");
            setErrors('true');
            invalidForm=false;
        }
  
        if(!password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*.-])[a-zA-Z0-9].{8,}$/))
          {
            console.log("Invalid Password!!!");
            setPasserrors(true);
            invalidForm=false;
          }
          return invalidForm;
      }
      
// ----------------------------------------------//
 const handleLogin=()=>{
    setErrors(false);
    setPasserrors(false);
        let loginData ={
            email,
            password
        }
        if(validation())
        {  
            loginService(loginData).then((response)=>{
            if(response.status === 200){
                localStorage.clear();
                console.log("login response: ",response)
                localStorage.setItem('token',response.data.result.accessToken);
                //alert("login Successfull");
                setShowAlert(true);
                setTimeout(() => {
                    history.push("/home");
                  }, 2000);
               //history.push("/home");
            } 
        }).catch((err)=>{
            alert("login response");
            console.log("this is exception: ",err);})
    }
    else{
        console.log("Invalid Email or Password...");
    }
}

    const handleSignup=()=>{
        history.push("/signup");
    }
  
    return (
        <div className="container">
            <Form className="loginForm" > 
                <h3>BookStore App</h3>
                    <div className="emailDivLogin">
                    <Form.Group size="lg" controlId="emailsss">
                    <Form.Label className="emailLabels">Email</Form.Label>
                    <div className="emailControldiv">
                    <Form.Control
                        autoFocus
                        placeholder="E-mail"
                        required
                        type="email"
                        onChange={(e) => setEmail(e.target.value)   }
                        isInvalid={!!errors}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                    </div>
                    </Form.Group>
                    </div>
                    <div className="passDivLogin">
                    <Form.Group size="lg" controlId="passwords">
                    <Form.Label className="passwordLabels">Password</Form.Label>
                    <div className="emailControldiv">
                    <Form.Control
                        autoFocus
                        required
                        type="password"
                        value={password}
                        placeholder="Password"
                        isInvalid={!!passerror}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                    </div>
                    </Form.Group>
                    </div>
                    <div className="loginDiv">
                    <Button id="loginbtn" block size="lg" type="button" onClick={handleLogin}>
                        Login
                    </Button>
                    </div>
                    <div id="SignUpBtn">
                    <div id="signupmsg">
                        <label id="msg">Don't have an account with us ?</label>
                    </div>
                        <Button id="signupbt" block size="lg" onClick={handleSignup} >Signup</Button>
                    </div>
                </Form>
                {showAlert?
                    <div class="alert alert-success" role="alert">
                    Login Successfull...
                </div>:null}
        </div>
    )
}

