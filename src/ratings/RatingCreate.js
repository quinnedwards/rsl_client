import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/environment';

const RatingCreate = (props) => {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/api/rating/create`, {
            method: 'POST',
            body: JSON.stringify({description: description, location: location, user: user}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setDescription('');
            setLocation('');
            setUser('');
            props.fetchRatings();
        })
    }

    return(
        <>
            <h4>Leave a rating!</h4>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="description"/>
                    <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location"/>
                    <Input name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="user"/>
                    <Input name="user" value={user} onChange={(e) => setUser(e.target.value)} />
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

export default RatingCreate;