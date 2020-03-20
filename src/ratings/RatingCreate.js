import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/environment';

const RatingCreate = (props) => {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/api/rating/create`, {
            method: 'POST',
            body: JSON.stringify({description: description, location: location, name: name}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setDescription('');
            setLocation('');
            setName('');
            props.fetchRatings();
        })
    }

    return(
        <>
        <br/>
        <br />
            <h4>Show me your favorite stores!</h4>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormGroup>
                    <Label htmlFor="description"/>
                    <Input placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location"/>
                    <Input placeholder="Location" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name"/>
                    <Input placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <Button color="success" type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

export default RatingCreate;