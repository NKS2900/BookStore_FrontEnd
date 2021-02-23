import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './signup.css'
export default function Signup() {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    console.log(fullName);
    return (
        <div >
            <Form className="formSignup">
                    <div className="fullnameDiv">
                    <Form.Group size="lg" controlId="fullname">
                    <Form.Label className="fullLabel">Full Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    </Form.Group>
                    </div>
                    <div className="emailDiv">
                    <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>
                    </div>
                    <div className="phoneDiv">
                    <Form.Group size="lg" controlId="phone">
                    <Form.Label className="phoneLabel">Phone Number</Form.Label>
                    <Form.Control
                        autoFocus
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    </Form.Group>
                    </div>
                    <div className="passDiv">
                    <Form.Group size="lg" controlId="password">
                    <Form.Label className="passwordLabel">Password</Form.Label>
                    <Form.Control
                        autoFocus
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    </div>
                    <div className="submitDiv">
                    <Button id="signup-btn" block size="lg" type="submit">
                        Signup
                    </Button>
                    </div>
                </Form>
       
        </div>
    )
}

