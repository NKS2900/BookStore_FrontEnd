import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './login.css'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div >
            <Form className="loginForm">
                    
                    <div className="emailDivLogin">
                    <Form.Group size="lg" controlId="emails">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>
                    </div>
                    <div className="passDivLogin">
                    <Form.Group size="lg" controlId="passwords">
                    <Form.Label className="passwordLabel">Password</Form.Label>
                    <Form.Control
                        autoFocus
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                    </div>
                    <div className="loginDiv">
                    <Button id="loginbtn" block size="lg" type="submit">
                        Login
                    </Button>
                    </div>
                </Form>
        </div>
    )
}

