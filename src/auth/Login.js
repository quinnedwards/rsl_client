import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        console.log('hello')
        event.preventDefault();
        fetch(`${APIURL}/api/login`, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response)=> response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return(
        <div>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormGroup>
                    <Label htmlFor="username"></Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password"></Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder="Password"/>
                </FormGroup>
                <Button className="bttn" color="success"type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;