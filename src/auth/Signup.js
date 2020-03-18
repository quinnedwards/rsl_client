import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/user`, {
            method: 'POST',
            body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, username: username, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormGroup>
                    <Label htmlFor="firstName"></Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name="firstName" value={firstName} placeholder="First Name"/>
                </FormGroup>
                <FormGroup>
                    <Input onChange={(e) => setLastName(e.target.value)} name="lastName" value={lastName} placeholder="Last Name"/>
                </FormGroup>
                <FormGroup>
                    {/* <Label htmlFor="email"></Label> */}
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    {/* <Label htmlFor="username"></Label> */}
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    {/* <Label htmlFor="password"></Label> */}
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder="Password"/>
                </FormGroup>
                <Button className="sign-bttn" color="success" type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;